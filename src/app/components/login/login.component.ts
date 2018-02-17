import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../model/user';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() public users: User[];
  newUser: User = new User();

  constructor(private restService: RestService) {
  }

  ngOnInit() {
  }

  logIn(userForm: NgForm): void {

  }

}
