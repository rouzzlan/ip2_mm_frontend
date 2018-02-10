import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() public user: User;

  constructor(private restService: RestService ) {
  }

  ngOnInit() {
  }

  editUser(userToEdit: User): void {
    this.restService.editUser(userToEdit);
  }
}
