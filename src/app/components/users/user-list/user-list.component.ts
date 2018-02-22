import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {RestService} from '../../services/rest.service/rest.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = null;

  constructor(private restService: RestService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.restService.getUsers().subscribe(users => this.users = users);
  }
}
