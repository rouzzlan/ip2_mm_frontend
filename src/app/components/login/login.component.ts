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
