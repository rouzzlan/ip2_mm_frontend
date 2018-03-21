import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME} from '../../resources/auth.constant';

@Injectable()
export class AuthService {
  static AUTH_URL = 'http://localhost:8080/oauth/token';

  constructor(private http: Http) {
  }

  login(email: string, password: string) {
    const body = `username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&grant_type=password`;

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));

    return this.http.post(AuthService.AUTH_URL, body, {headers})
      .map(res => res.json()) //No longer required for HttpClient
      .map((res: any) => {
        if (res.access_token) {
          return res;
        }
        return res.status + ": " + res.statusText;
      });
  }
}
