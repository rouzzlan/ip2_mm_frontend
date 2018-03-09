import {Injectable} from '@angular/core';
import {JwtHelper} from 'angular2-jwt';

import {TOKEN_NAME} from '../services/auth.constant';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class UserService {
  jwtHelper: JwtHelper = new JwtHelper();
  accessToken: string;
  isBeheerder: boolean;

  constructor( private cookieService: CookieService ) {}

  login(accessToken: string) {
    const decodedToken = this.jwtHelper.decodeToken(accessToken);
    console.log(decodedToken);
    this.isBeheerder = decodedToken.authorities.some(el => el === 'ROLE_BEHEERDER');
    this.accessToken = accessToken;
    localStorage.setItem(TOKEN_NAME, this.accessToken);
    this.cookieService.set(TOKEN_NAME, accessToken);
  }

  logout() {
    this.accessToken = null;
    this.isBeheerder = false;
    localStorage.removeItem(TOKEN_NAME)
    this.cookieService.delete(TOKEN_NAME);
  }

  isBeheerderUser(): boolean {
    return this.isBeheerder;
  }

  isUser(): boolean {
    return this.accessToken && !this.isBeheerder;
  }
}
