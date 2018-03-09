import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "../../../services/registration.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  response: string
  token: string;
  succes: boolean;
  error: boolean;


  constructor(private registrationService: RegistrationService,
              private activatedRoute: ActivatedRoute) {
    this.token = this.activatedRoute.snapshot.queryParams['token'];
  }

  ngOnInit() {
    this.confirm();
  }

   private confirm() {
      this.registrationService.confirm(this.token)
         .subscribe(
        (data) => {
          this.succes = true
          this.error = false
          this.response = data.status + ": account succesvol geactiveerd"},
        (err) => {
          this.succes = false
          this.error = true
          if (err.status === 409) {
            this.response = err.status + ": account is al geactiveerd"
          } else {
          this.response = err.status + ": " + err.toString()
          }
        }
        );
   }
}
