import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {LoginService} from "../account/login.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private loginService: LoginService,
              public jwtHelper: JwtHelperService) {
  }

  //TODO zouden eigenlijk een nieuwe token moeten aanvragen met de refreshtoken en slechts false teruggeven als deze gerefused wordt
  //TODO dit zou kunnen ADHV een HttpInterceptor
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.jwtHelper.isTokenExpired(this.loginService.accessToken)) {
      this.router.navigate(['account/login'], {queryParams: {redirectTo: state.url}});
      return false;
    } else {
      return true;
    }
  }
}
