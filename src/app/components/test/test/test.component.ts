import {Component, OnInit} from '@angular/core';
import {TestService} from "../../../services/test.service";

@Component({
  selector: 'app-user',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  roles;
  users;
  lessontypes;

  constructor(private testService: TestService) {
  }

  async ngOnInit() {
    this.roles = await this.testService.getRoles();
    this.lessontypes = await this.testService.getLessonTypes();
    this.users = await this.testService.getUsers();
  }
}
