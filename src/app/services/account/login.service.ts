import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {TOKEN_NAME} from "../../resources/auth.constant";

@Injectable()
export class LoginService {
  accessToken: string;

  constructor(public jwtHelper: JwtHelperService) {}

  login(accessToken: string, email:string) {
    //DECODE TOKEN
    const decodedToken = this.jwtHelper.decodeToken(accessToken);

    //SET RIGHTS
    if (decodedToken.authorities != null) {
      localStorage.setItem("hasLeerlingRights", decodedToken.authorities.some(auth => auth === 'ROLE_LEERLING'));
      localStorage.setItem("hasLesgeverRights", decodedToken.authorities.some(auth => auth === 'ROLE_LESGEVER'));
      localStorage.setItem("hasBeheerderRights", decodedToken.authorities.some(auth => auth === 'ROLE_BEHEERDER'));
    }

    //SAVE TOKEN
    this.accessToken = accessToken;
    localStorage.setItem(TOKEN_NAME, accessToken);
    localStorage.setItem("email", email);
  }

  logout() {
    this.accessToken = null;
    localStorage.removeItem(TOKEN_NAME)
    localStorage.removeItem("email")
    localStorage.removeItem("hasLeerlingRights")
    localStorage.removeItem("hasLesgeverRights")
    localStorage.removeItem("hasBeheerderRights")
  }

  isBeheerder(): boolean {
    if (localStorage.getItem("hasBeheerderRights") === "true") {
      return true
    } else {
      return false
    }
  }

  isLesgever(): boolean {
    if (localStorage.getItem("hasLesgeverRights") === "true") {
      return true
    } else {
      return false
    }
  }

  isLeerling(): boolean {
    if (localStorage.getItem("hasLeerlingRights") === "true") {
      return true
    } else {
      return false
    }
  }

  user(): string {
    return localStorage.getItem("email");
  }
}
