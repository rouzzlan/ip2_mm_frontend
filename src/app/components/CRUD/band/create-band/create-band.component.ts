import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Band} from '../../../../model/band';
import {Role} from '../../../../model/role';
import {User} from '../../../../model/user';
import {BandService} from '../../../../services/band/band.service';
import {RestService} from '../../../../services/rest/rest.service';


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
  studentMails: string[] = [];
  public addTrigger = false;

  constructor(private userService: RestService, private bandService: BandService) {
  }

  ngOnInit() {
    // this.getRoles();
    this.getUsers();
    this.newBand.students = [];
  }

  // region REST calls
  public getRoles(): void {
    this.userService.getRoles().subscribe(roles => this.roles = roles);
  }

  public getUsers(): void {
    this.userService.getStudents().subscribe(students => this.students = students);
    this.userService.getTeachers().subscribe(teachers => this.teachers = teachers);
  }

  public createBand(bandForm: NgForm): void {
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

  // TODO beter uitwerken
  public addingStudent(studentUsername: String): void {
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
