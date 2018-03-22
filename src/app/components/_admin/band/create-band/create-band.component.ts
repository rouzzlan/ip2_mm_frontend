import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Band} from '../../../../model/band';
import {BandService} from '../../../../services/band/band.service';
import {UserService} from "../../../../services/user/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-create-band',
  templateUrl: './create-band.component.html',
  styleUrls: ['./create-band.component.css']
})
export class CreateBandComponent implements OnInit {
  newBand: Band = new Band();
  bands: Band[] = [];
  students: String[] = [];
  teachers: String[] = [];
  studentMail: string;
  public addTrigger = false;
  deletedTeacher: String;
  private deletedStudent: String;

  constructor(private userService: UserService, private bandService: BandService, private router: Router) {

  }

  ngOnInit() {
    // this.getRoles();
    this.getUsers();
    this.newBand.students = [];
  }

  // region REST calls
  public getUsers(): void {
    this.userService.getStudents().subscribe(students => this.students = students);
    this.userService.getTeachers().subscribe(teachers => this.teachers = teachers);
  }

  public createBand(bandForm: NgForm): void {
    this.bandService.createBand(this.newBand)
      .subscribe(() => {
        this.router.navigate(['bands']);
      });
  }

  // endregion

  public addStudent(): void {
    this.newBand.students.push(this.studentMail);
    this.students.splice(this.students.indexOf(this.studentMail), 1);
    //this.deletedStudent = '';
    this.addTrigger = false;
  }

  public deleteStudent(student: String): void {
    this.newBand.students.splice(this.newBand.students.indexOf(student), 1);
    this.students.push(student);
  }

  public addStudentArea(): void {
    this.addTrigger = true;
  }

  public deleteStudentArea(): void {
    this.addTrigger = false;
  }

  public deleteFromStudents(event) {
    if (this.deletedTeacher != null) {
      this.students.push(this.deletedTeacher)
    }
    const teacher = event.target.value;
    if (this.students.find(t => teacher === t)) {
      this.students.splice(this.students.indexOf(teacher), 1)
    }
    this.deletedTeacher = teacher;
  }

  // public deleteFromTeachers(event) {
  //   console.log(this.deletedStudent);
  //   if (this.deletedStudent != null) {
  //     this.teachers.push(this.deletedStudent)
  //   }
  //   const student = event.target.value;
  //   if (this.students.find(s => student === s)) {
  //     this.teachers.splice(this.teachers.indexOf(student), 1);
  //     this.deletedStudent = student;
  //   }
  // }
}
