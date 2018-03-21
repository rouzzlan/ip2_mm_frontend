import {Component, OnInit} from '@angular/core';
import {Band} from '../../../../model/band';
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import {BandService} from "../../../../services/band/band.service";
import {UserService} from "../../../../services/user/user.service";

@Component({
  selector: 'app-edit-band',
  templateUrl: './edit-band.component.html',
  styleUrls: ['./edit-band.component.css']
})
export class EditBandComponent implements OnInit {

  bandToEdit: Band = new Band();
  teachers: String[] = [];
  students: String[] = [];
  addTrigger: Boolean = false;
  deletedTeacher: String;

  constructor(private userService: UserService, private bandService: BandService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bandService.getBand(+params['id'])
        .subscribe(receivedBand => this.bandToEdit = receivedBand,
          error => {
          },
          () => {
            this.deletedTeacher = this.bandToEdit.teacher;
          }
        );
    });
    this.getUsers();
  }

  // region REST calls
  public editBand(bandForm: NgForm): void {
    this.bandService.editBand(this.bandToEdit).subscribe();
  }

  public getUsers(): void {
    this.userService.getStudents()
      .subscribe(students => this.students = students,
        error => {
        },
        () => {
          this.students.splice(this.students.indexOf(this.bandToEdit.teacher), 1);
        }
      );
    this.userService.getTeachers()
      .subscribe(teachers => this.teachers = teachers);
  }

  // endRegion
  public addStudent(): void {
    this.addTrigger = true;
  }

  public setAddStudentFalse(): void {
    this.addTrigger = false;
  }

  public deleteStudent(student: String): void {
    this.bandToEdit.students.splice(this.bandToEdit.students.indexOf(student), 1);
    this.students.push(student);
  }

  public deleteFromStudents(event) {
    if (this.deletedTeacher != null) {
      this.students.push(this.deletedTeacher)
    }
    const teacher = event.target.value;
    if (this.students.find(t => teacher === t)) {
      this.students.splice(this.students.indexOf(teacher), 1);
      this.deletedTeacher = teacher;
    }
  }
}
