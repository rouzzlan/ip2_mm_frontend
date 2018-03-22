import { Component, OnInit } from '@angular/core';
import {User} from "../../../../model/user";
import {UserService} from "../../../../services/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {errorHandler} from "@angular/platform-browser/src/browser";
import {error} from "util";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  userToDelete: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.getUser();
  }

  public getUser(): void {
    this.route.params.subscribe(params => {
      this.userService.getUser(params['email'])
        .subscribe(receivedUser => this.userToDelete = receivedUser);
    });
  }

  public deleteUser(): void {
    this.userService.deleteUser(this.userToDelete.email)
      .subscribe(
        response => {
          this.router.navigate(['/admin/users']);
          window.alert(this.userToDelete.email + " is verwijderd");
        },
        (err: HttpErrorResponse)=> {
          console.log(err.error);
        }
      );
  }
}
