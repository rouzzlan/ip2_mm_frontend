import {Component, OnInit} from '@angular/core';

import {AppDataService} from '../../../services/app-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  text;

  constructor(private appDataService: AppDataService) {
  }

  ngOnInit() {
    this.text = this.appDataService.getRoles();
  }
}
