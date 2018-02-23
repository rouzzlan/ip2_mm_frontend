import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Role} from '../../../model/role';
import {RestService} from '../../../services/rest.service/rest.service';
import {User} from '../../../model/user';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  public isTeacher = false;
  public isAdmin = false;
  public isStudent = false;
  users: User[] = null;
  newUser: User = new User();
  roles: Role[] = null;

  constructor(private restService: RestService) {
    this.newUser.roles = [];
  }

  ngOnInit() {
    this.getUsers();
    this.getRoles();
  }


  // region REST calls
  createUser(userForm: NgForm): void {
    this.restService.createUser(this.newUser)
      .subscribe(createUser => {
        userForm.reset();
        this.newUser = new User();
        // this.newUser.roles = [];
        // if (this.isTeacher) {
        //   this.role.id = 0;
        //   this.role.name = 'leerkracht';
        //   this.newUser.roles[0] = this.role;
        //   for (const rollie of this.newUser.roles) {
        //     console.log(rollie.id + ' checkmark');
        //   }
        // }
        // if (this.isAdmin) {
        //   this.role.name = 'beheerder';
        //   this.newUser.roles.push(this.role);
        // }
        // if (this.isStudent) {
        //   this.role.name = 'student';
        //   this.newUser.roles.push(this.role);
        // }
        // unshift adds the user at the beginning of the array and returns the count
        this.users.unshift(createUser);
      });
  }

  getUsers(): void {
    this.restService.getUsers().subscribe(users => this.users = users);
  }

  public getRoles(): void {
    this.restService.getRoles().subscribe(roles => this.roles = roles);
  }

  // endregion

  public add() {

  }

  public delete() {

  }

  public toggleTeacher() {
    this.isTeacher = !this.isTeacher;
  }

  public toggleAdmin() {
    this.isAdmin = !this.isAdmin;
  }

  public toggleStudent() {
    this.isStudent = !this.isStudent;
  }

  public setTeacherFalse() {
    this.isTeacher = false;
  }

  addRole(roleName: String) {
    const role = this.roles.find(r => r.name === roleName);
    if (!this.newUser.roles.find(r => r === role)) {
      this.newUser.roles.push(role);
    } else {
      this.newUser.roles.splice(this.newUser.roles.indexOf(role), 1);
    }
  }
}
