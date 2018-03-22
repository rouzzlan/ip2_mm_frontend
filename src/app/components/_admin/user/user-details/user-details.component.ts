import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user/user.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../../model/user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.getUser(params['email'])
        .subscribe(receivedUser => this.user = receivedUser);
    });
  }
}
