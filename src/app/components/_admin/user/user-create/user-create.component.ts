import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../../services/user/user.service";
import {User} from "../../../../model/user";
import {Role} from "../../../../model/role";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  newUser: User = new User();
  options = [
    {name:'ROLE_LEERLING', checked:false},
    {name:'ROLE_LESGEVER', checked:false},
    {name:'ROLE_BEHEERDER', checked:false}
  ]

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.newUser.roles = [];
  }

  get selectedRoles() {
    return this.options
      .filter(opt => opt.checked)
      .map(opt => opt.name)
  }


  public createUser(userForm: NgForm): void {
    // for(let role of this.selectedRoles) {
    //   console.log(role)
    // }
    this.newUser.roles = this.selectedRoles

    this.userService.createUser(this.newUser)
      .subscribe(response => {
          this.router.navigate(['/admin/users']);
          window.alert(this.newUser.email + " is aangemaakt");
          userForm.reset();
        },
        err => console.log(err.toString())
      );
  }
}
