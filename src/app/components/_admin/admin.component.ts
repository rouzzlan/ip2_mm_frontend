import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/account/login.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router,
              private loginService: LoginService,) { }

  ngOnInit() {
  }

  redirect(pagename: string) {
    this.router.navigate(['/'+pagename]);
  }

  get isBeheerder() {
    return this.loginService.isBeheerder();
  }

  get isLesgever() {
    return this.loginService.isLesgever();
  }

}
