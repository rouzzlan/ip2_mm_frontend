import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../model/user';
import {Band} from '../../../../model/band';
import {BandService} from '../../../../services/band/band.service';
import {UserService} from "../../../../services/user/user.service";

@Component({
  selector: 'app-get-bands-of-user',
  templateUrl: './get-bands-of-user.component.html',
  styleUrls: ['./get-bands-of-user.component.css']
})
export class GetBandsOfUserComponent implements OnInit {

  user: User = new User();
  bands: Band[] = [];

  constructor(private bandService: BandService, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser('user3@user.com').subscribe(receivedUser => this.user = receivedUser, error => {
    }, () => this.getBandsOfUser());
  }

  // region REST calls
  public getBandsOfUser(): void {
    this.bandService.getBandsOfUser(this.user.id).subscribe(receivedBands => this.bands = receivedBands);
  }

  // endRegion
}
