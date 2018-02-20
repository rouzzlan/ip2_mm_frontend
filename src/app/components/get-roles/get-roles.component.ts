import {Component, OnInit} from '@angular/core';
import {Role} from '../../model/role';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-get-roles',
  templateUrl: './get-roles.component.html',
  styleUrls: ['./get-roles.component.css']
})
export class GetRolesComponent implements OnInit {
  roles: Role[] = null;

  constructor(private restService: RestService) {
  }

  ngOnInit() {
    this.getRoles();
  }

  public getRoles(): void {
    this.restService.getRoles().subscribe(roles => this.roles = roles);
  }

}
