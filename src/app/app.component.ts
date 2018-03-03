import {Component, OnInit} from '@angular/core';
import {User} from './model/user';
import {UserService} from "./services/user.service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUser('user@user\.com');
  }

  private getUser(email: string): void {
    this.userService.getUser(email).subscribe(user => this.user = user);
  }
}
