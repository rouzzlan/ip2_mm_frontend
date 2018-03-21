import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {LoginService} from "../account/login.service";
import {BeheerderGuard} from "./beheerder-guard.service";

@Injectable()
export class LeerlingGuard implements CanActivate {

  constructor(private router: Router,
              private loginService: LoginService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLeerling = this.loginService.isLeerling();
    const isLesgever = this.loginService.isLesgever();
    const isBeheerder = this.loginService.isBeheerder();
    if (isLeerling || isLesgever || isBeheerder) {
      return true;
    } else {
      console.log("leerling guard redirect")
      this.router.navigate(['account/login']);
      return false;
    }
  }
}
