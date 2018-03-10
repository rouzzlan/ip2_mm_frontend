import {Component, Input, OnInit} from '@angular/core';
import {Band} from '../../../model/band';
import {User} from '../../../model/user';
import {BandService} from '../../../services/band/band.service';

@Component({
  selector: 'app-edit-band',
  templateUrl: './edit-band.component.html',
  styleUrls: ['./edit-band.component.css']
})
export class EditBandComponent implements OnInit {

  @Input() bandName: string;
  bandToEdit: Band = new Band();
  teachers: User[] = [];
  students: User[] = [];
  addTrigger: Boolean = false;

  constructor(private bandService: BandService) {
  }

  ngOnInit() {
    this.getBandToEdit();
    this.getTeachers();
    this.getStudents();
  }

  // region REST calls
  public getBandToEdit(): void {
    this.bandService.getBand(this.bandName).subscribe(receivedBand => this.bandToEdit = receivedBand);
  }

  public editBand(): void {
    this.bandService.editBand(this.bandToEdit);
  }

  public getTeachers(): void {

  }

  public getStudents(): void {

  }

  // endRegion

  public addStudent(): void {
    this.addTrigger = true;
  }

  public setAddStudentFalse(): void {
    this.addTrigger = false;
  }

}
