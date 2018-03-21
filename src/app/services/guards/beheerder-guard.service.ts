import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {LoginService} from "../account/login.service";

@Injectable()
export class BeheerderGuard implements CanActivate {

  constructor(private router: Router,
              private loginService: LoginService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isBeheerder = this.loginService.isBeheerder();
    if (isBeheerder) {
      return true;
    } else {
      console.log("beheerder guard redirect")
      this.router.navigate(['account/login']);
      return false;
    }
  }
}
