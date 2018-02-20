import {Component, OnInit} from '@angular/core';
import {Band} from '../../model/Band';
import {User} from '../../model/user';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-create-band',
  templateUrl: './create-band.component.html',
  styleUrls: ['./create-band.component.css']
})
export class CreateBandComponent implements OnInit {
  newBand: Band = new Band();
  students: User[] = null;
  chosenStudents: User[] = null;
  public addTrigger = false;

  constructor(private restService: RestService) {
  }

  ngOnInit() {
    // this.getStudents();
  }

  // public getStudenst(): void {
  //   this.restService.getStudents().subscribe(students => this.students = students);
  // }

  public addStudent(): void {
    this.addTrigger = true;
  }

  public addingStudent(): void {

    this.addTrigger = false;
  }

}
