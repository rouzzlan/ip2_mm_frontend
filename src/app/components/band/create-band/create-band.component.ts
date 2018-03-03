import {Component, OnInit} from '@angular/core';
import {Band} from '../../../model/band';
import {User} from '../../../model/user';
import {UserService} from '../../../services/user.service/user.service';
import {NgForm} from '@angular/forms';
import {BandServiceService} from '../../../services/band.service/band-service.service';
import {Role} from '../../../model/role';

@Component({
  selector: 'app-create-band',
  templateUrl: './create-band.component.html',
  styleUrls: ['./create-band.component.css']
})
export class CreateBandComponent implements OnInit {
  newBand: Band = new Band();
  bands: Band[] = [];
  roles: Role[] = [];
  index = 0;
  indexS = 0;
  indexT = 0;
  students: User[] = [];
  teachers: User[] = [];
  public addTrigger = false;

  constructor(private userService: UserService, private bandService: BandServiceService) {
  }

  ngOnInit() {
    // this.getRoles();
    this.getUsers();
    this.newBand.students = [];
  }

  // region REST calls
  public getRoles(): void {
    this.restService.getRoles().subscribe(roles => this.roles = roles);
  }

  // TODO kijken waarom dees raar doet!
  public getUsers(): void {
    this.getRoles();
    this.restService.getUsers().subscribe(users => {
      for (const user of users) {
        const rStudent = this.roles.find(rl => rl.name === 'ROLE_LEERLING');
        const rTeacher = this.roles.find(rl => rl.name === 'ROLE_LESGEVER');
        if (!user.roles.find(rl => rl === rStudent.name)) {
          this.students[this.indexS] = user;
          this.indexS++;
        }
        if (!user.roles.find(rl => rl === rTeacher.name)) {
          this.teachers[this.indexT] = user;
          this.indexT++;
        }
      }
    });
  }

  public createBand(bandForm: NgForm): void {
    console.log(this.newBand.name + ' hry');
    this.bandService.createBand(this.newBand)
      .subscribe(createBand => {
        bandForm.reset();
        this.newBand = new Band();
        this.bands.unshift(createBand);
      });
  }

  // endregion


  public addStudent(): void {
    this.addTrigger = true;
  }

  public addingStudent(studentUsername: String): void {
    console.log('hey');
    const student = this.students.find(s => s.username === studentUsername);
    if (!this.newBand.students.find(s => s === student.username)) {
      this.newBand.students.push(student.username);
    }

    console.log(studentUsername + ' ' + this.newBand.students);
    // this.newBand.students[this.index] = student;
    // this.index++;
    // this.addTrigger = false;
  }

  // TODO beter uitwerken
  public placeStudentInTextArea(): void {
    this.addTrigger = false;
  }

  public setAddStudentFalse(): void {
    this.addTrigger = false;
  }
}
