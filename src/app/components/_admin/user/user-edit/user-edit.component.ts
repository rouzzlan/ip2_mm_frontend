import { Component, OnInit } from '@angular/core';
import {User} from "../../../../model/user";
import {UserService} from "../../../../services/user/user.service";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.userService.getUser(params['email'])
    //     .subscribe(user => this.user = user);
    // })
  }

  // // region REST calls
  // public editUser(userForm: NgForm): void {
  //   this.userService.editUser(this.user)
  //     .subscribe();
  // }
}
