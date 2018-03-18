import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../model/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() public user: User;

  constructor() { }

  ngOnInit() {
  }
}
