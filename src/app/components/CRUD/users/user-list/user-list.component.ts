import {Component, OnInit} from '@angular/core';
import {User} from "../../../../model/user";
import {OldUserService} from "../../../../services/old.user/old.user.service";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = null;

  constructor(private userService: OldUserService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
}
