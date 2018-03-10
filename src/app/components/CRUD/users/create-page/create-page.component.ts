import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../../../model/user';
import {Role} from '../../../../model/role';
import {RestService} from '../../../../services/rest/rest.service';



@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {
  users: User[] = [];
  newUser: User = new User();
  roles: Role[] = null;

  constructor(private userService: RestService) {
    this.newUser.roles = [];
  }

  ngOnInit() {
    // this.getUsers();
    this.getRoles();
  }

  // region REST calls
  createUser(userForm: NgForm): void {
    this.userService.createUser(this.newUser)
      .subscribe(createUser => {
        userForm.reset();
        this.newUser = new User();
        this.users.unshift(createUser);
      });
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  public getRoles(): void {
    this.userService.getRoles().subscribe(roles => this.roles = roles);
  }

  // endregion

  addRole(roleName: String) {
    const role = this.roles.find(r => r.name === roleName);
    if (!this.newUser.roles.find(r => r === role.name)) {
      this.newUser.roles.push(role.name);
    } else {
      this.newUser.roles.splice(this.newUser.roles.indexOf(role.name), 1);
    }
  }
}
