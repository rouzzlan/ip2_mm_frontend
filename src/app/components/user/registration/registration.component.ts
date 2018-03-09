import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {RegistrationService} from "../../../services/registration.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  model: any = {};
  succes: boolean;
  error: boolean;
  loading = false;
  response = '';

  constructor( private userService: UserService,
               private registrationService: RegistrationService
               ) { }

  ngOnInit(): void {
    this.userService.logout();
  }


  //TODO dynamic CSS so we dont have to use booleans

  register() {
    this.loading = true;
    this.registrationService.register(this.model.email, this.model.password)
    .map(res => {
      if(res.status === 201) {
        return res.status + ": Activatiemail verzonden!";
      } else {
        return res.status + ": " + res.text;
      }})
        .subscribe(
          (data) => {
            this.succes = true
            this.error = false
            this.loading = false
            this.response = data.toString()
          },
          (err) => {
            this.succes = false
            this.error = true
            this.loading = false
            if (err.status === 409) {
              this.response = err.status + ": email zit al in het systeem"
            } else {
              this.response = err.toString();
            }
          });
  }
}
