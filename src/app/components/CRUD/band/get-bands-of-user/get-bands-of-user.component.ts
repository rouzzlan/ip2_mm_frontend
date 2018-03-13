import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../model/user';
import {Band} from '../../../../model/band';
import {BandService} from '../../../../services/band/band.service';
import {RestService} from "../../../../services/rest/rest.service";

@Component({
  selector: 'app-get-bands-of-user',
  templateUrl: './get-bands-of-user.component.html',
  styleUrls: ['./get-bands-of-user.component.css']
})
export class GetBandsOfUserComponent implements OnInit {

  /*@Input()*/
  user: User = new User();
  bands: Band[] = [];

  constructor(private bandService: BandService, private userService: RestService) {
  }

  ngOnInit() {
    this.userService.getUser('user2@user.com').subscribe(receivedUser => this.user = receivedUser, error => {
    }, () => this.getBandsOfUser());
  }

  // region REST calls
  public getBandsOfUser(): void {
    this.bandService.getBandsOfUser(this.user.email).subscribe(receivedBands => this.bands = receivedBands);
  }

  // endRegion
}
