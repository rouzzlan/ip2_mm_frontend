import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "../../../services/account/registration.service";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  model: any = {};
  succes: boolean;
  loading = false;
  response = '';

  constructor( private registrationService: RegistrationService) { }

  ngOnInit(): void {
  }


  //TODO dynamic CSS so we dont have to use booleans

  register() {
    this.loading = true;
    this.registrationService.register(this.model.email, this.model.password)
    .map(res => {
      if(res.status === 201) {
        return "Activatiemail verzonden!";
      } else {
        return res.status + ": " + res.text;
      }})
        .subscribe(
          (data) => {
            this.succes = true;
            this.loading = false;
            this.response = data.toString()
          },
          (err) => {
            this.succes = false;
            this.loading = false;
            if (err.status === 409) {
              this.response = "Email zit al in ons systeem"
            } else {
              this.response = err.toString();
            }
          });
  }
}
