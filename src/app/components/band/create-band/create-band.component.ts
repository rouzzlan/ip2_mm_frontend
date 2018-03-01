import {Component, OnInit} from '@angular/core';
import {Band} from '../../../model/band';
import {User} from '../../../model/user';
import {UserService} from '../../../services/user.service/user.service';
import {NgForm} from '@angular/forms';
import {BandServiceService} from '../../../services/band.service/band-service.service';

@Component({
  selector: 'app-create-band',
  templateUrl: './create-band.component.html',
  styleUrls: ['./create-band.component.css']
})
export class CreateBandComponent implements OnInit {
  newBand: Band = new Band();
  allUsers: User[] = null;
  bands: Band[] = null;
  index = 0;
  indexS = 0;
  indexT = 0;
  students: User[] = null;
  teachers: User[] = null;
  public addTrigger = false;

  constructor(private userService: UserService, private bandService: BandServiceService) {
  }

  ngOnInit() {
    this.getStudents();
    this.retrieveStudentsAndTeachers();
  }

  // region REST calls
  public getStudents(): void {
    this.userService.getStudents().subscribe(students => this.allUsers = students);
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

  public retrieveStudentsAndTeachers(): void {
    for (const user of this.allUsers) {
      for (const role of user.roles) {
        if (role === 'STUDENT') {
          this.students[this.indexS] = user;
          this.indexS++;
        } else if (role === 'TEACHER') {
          this.teachers[this.indexT] = user;
          this.indexT++;
        }
      }
    }
  }

  public addStudent(): void {
    this.addTrigger = true;
  }

  public addingStudent(student: User): void {
    this.newBand.students[this.index] = student;
    this.index++;
    this.addTrigger = false;
  }

  public selectItem(event: Event): void {
  }

  public setAddStudentFalse(): void {
    this.addTrigger = false;
  }
}
