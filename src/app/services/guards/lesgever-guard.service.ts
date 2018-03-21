import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {LoginService} from "../account/login.service";

@Injectable()
export class LesgeverGuard implements CanActivate {

  constructor(private router: Router,
              private loginService: LoginService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLesgever = this.loginService.isLesgever();
    const isBeheerder = this.loginService.isBeheerder();
    if (isLesgever || isBeheerder) {
      return true;
    } else {
      console.log("lesgever guard redirect")
      this.router.navigate(['account/login']);
      return false;
    }
  }
}
