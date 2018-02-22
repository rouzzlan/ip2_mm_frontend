import {Component, OnInit} from '@angular/core';
import {RestService} from '../../services/rest.service/rest.service';
import {NgForm} from '@angular/forms';
import {User} from '../../model/user';
import {Role} from '../../model/role';

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
  role: Role = new Role();

  constructor(private restService: RestService) {
    this.newUser.roles = [];
  }

  ngOnInit() {
    this.getUsers();
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
}
