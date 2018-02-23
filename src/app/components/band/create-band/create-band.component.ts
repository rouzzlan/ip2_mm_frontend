import {Component, OnInit} from '@angular/core';
import {Band} from '../../../model/band';
import {User} from '../../../model/user';
import {RestService} from '../../../services/rest.service/rest.service';

@Component({
  selector: 'app-create-band',
  templateUrl: './create-band.component.html',
  styleUrls: ['./create-band.component.css']
})
export class CreateBandComponent implements OnInit {
  newBand: Band = new Band();
  students: User[] = null;
  index = 0;
  chosenStudents: User[] = null;
  public addTrigger = false;

  constructor(private restService: RestService) {
  }

  ngOnInit() {
    this.getStudents();
  }

  public getStudents(): void {
    this.restService.getStudents().subscribe(students => this.students = students);
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

}
