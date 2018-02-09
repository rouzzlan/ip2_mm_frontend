import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {NgForm} from '@angular/forms';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = null;
  newUser: User = new User();

  constructor(private restService: RestService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.restService.getUsers().subscribe(users => this.users = users);
  }

  createUser(userForm: NgForm): void {
    this.restService.createUser(this.newUser)
      .subscribe(createUser => {
        userForm.reset();
        this.newUser = new User();
        // unshift adds the user at the beginning of the array and returns the count
        this.users.unshift(createUser);
      });
  }


}
