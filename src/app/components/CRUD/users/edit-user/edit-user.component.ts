import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../model/user';
import {RestService} from '../../../../services/rest/rest.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() public user: User;

  constructor(private userService: RestService ) {
  }

  ngOnInit() {
  }

  editUser(userToEdit: User): void {
    this.userService.editUser(userToEdit);
  }
}
