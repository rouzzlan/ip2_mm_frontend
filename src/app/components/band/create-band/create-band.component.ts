import {Component, OnInit} from '@angular/core';
import {Band} from '../../../model/band';
import {User} from '../../../model/user';
import {RestService} from '../../../services/rest.service/rest.service';
import {NgForm} from '@angular/forms';
import {BandServiceService} from '../../../services/band.service/band-service.service';

@Component({
  selector: 'app-create-band',
  templateUrl: './create-band.component.html',
  styleUrls: ['./create-band.component.css']
})
export class CreateBandComponent implements OnInit {
  newBand: Band = new Band();
  bands: Band[] = null;
  index = 0;
  indexS = 0;
  indexT = 0;
  students: User[] = [];
  teachers: User[] = [];
  public addTrigger = false;

  constructor(private restService: RestService, private bandService: BandServiceService) {
  }

  ngOnInit() {
    this.getUsers();
    this.newBand.students = [];
  }

  // region REST calls
  public getUsers(): void {
    this.restService.getUsers().subscribe(users => {
      for (const user of users) {
        for (const role of user.roles) {
          if (role === 'ROLE_LEERLING') {
            this.students[this.indexS] = user;
            this.indexS++;
          } else if (role === 'ROLE_LESGEVER') {
            this.teachers[this.indexT] = user;
            this.indexT++;
          }
        }
      }
    });
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

  public addingStudent(student: User): void {
    this.newBand.students[this.index] = student;
    this.index++;
    this.addTrigger = false;
  }

  public setAddStudentFalse(): void {
    this.addTrigger = false;
  }
}
