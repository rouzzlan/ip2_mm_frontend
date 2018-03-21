import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {RegistrationService} from "../../../services/account/registration.service";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  response: string
  token: string;
  succes: boolean;


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
            this.succes = true;
            this.response = "Account succesvol geactiveerd"},
          (err) => {
            this.succes = false;
            if (err.status === 409) {
              this.response = "Account is al geactiveerd";
            } else {
            this.response = err.status + ": " + err.toString()
            }
          }
        );
   }
}
