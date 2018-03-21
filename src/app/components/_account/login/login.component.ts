import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from "../../../services/account/auth.service";
import {LoginService} from "../../../services/account/login.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  redirectUrl: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private loginService: LoginService) {
    this.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];
  }

  ngOnInit(): void {
    this.loginService.logout();
  }

  login() { //TODO Foutafhandeling op de backend is niet goed en kunnen daarom op de frontend nog niet tonen wat er precies fout gaat
    this.loading = true;

    this.authService.login(this.model.email, this.model.password)
      .subscribe(
        result => {
          this.loading = false;

          if (result) {
            this.loginService.login(result.access_token, result.email );
            this.navigateAfterSuccess();
          } else {
            this.error = 'Username or password is incorrect';
          }
        },
        (error: HttpErrorResponse) => {
          console.log(error)
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      );
  }

  private navigateAfterSuccess() {
    if (this.redirectUrl) {
      this.router.navigateByUrl(this.redirectUrl);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
