import { Component, OnInit } from '@angular/core';
import {User} from "../../../../model/user";
import {UserService} from "../../../../services/user/user.service";

@Component({
  selector: 'app-usershome',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.css']
})
export class UsersHomeComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
}
