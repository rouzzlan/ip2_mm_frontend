import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertServiceComponent} from '../../../services/alert.service/alert.service.component';
import {AuthenticationServiceComponent} from '../../../services/authentication.service/authentication-service.component';

/**
 * Used for login and logout.
 * To login it posts the user credentials and checks the response for a
 * JWT token. If there is one authentication is succesfull.
 * Tokens and user details are added to the local storage.
 * So the user stays logged in when browsing through the site.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationServiceComponent,
              private alertService: AlertServiceComponent) {
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(): void {
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

}
