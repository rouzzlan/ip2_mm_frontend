import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ChangeDetectorRef} from '@angular/core';
import {LoginService} from './services/account/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router,
              private loginService: LoginService,
              private cdRef: ChangeDetectorRef) {
  }

  ngAfterViewChecked() {
    // Avoid the error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
    this.cdRef.detectChanges();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }

  get isBeheerder() {
    return this.loginService.isBeheerder();
  }

  get isLesgever() {
    return this.loginService.isLesgever();
  }

  get isLeerling() {
    return this.loginService.isLeerling();
  }

  get user() {
    return this.loginService.user();
  }
}

