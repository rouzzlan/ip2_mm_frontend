import { Injectable } from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME} from "../../resources/auth.constant";


@Injectable()
export class RegistrationService {
  static REGISTRATION_URL = "http://localhost:8080/account/register"
  static CONFIRMATION_URL = "http://localhost:8080/account/confirm"

  constructor(private http: Http) {
  }

  register(email: string, password: string) {
    const Obj = {
      email: email,
      password: password
    };

    const body = JSON.stringify(Obj);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));

    return this.http.post(RegistrationService.REGISTRATION_URL, body,{headers})
      .map((res) => {
        if (res) {
          return { status: res.status, text: res.statusText}
        }
      });
  }

  confirm(token: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));
    let params = new URLSearchParams();
    params.append("token", token);

    return this.http.get(RegistrationService.CONFIRMATION_URL, { headers, params })
      .map((res) => {
        if (res) {
          return { status: res.status, text: res.statusText}
        }
      });
  }
}
