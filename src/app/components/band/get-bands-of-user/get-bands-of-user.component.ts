import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../model/user';
import {Band} from '../../../model/band';
import {BandService} from '../../../services/band/band.service';

@Component({
  selector: 'app-get-bands-of-user',
  templateUrl: './get-bands-of-user.component.html',
  styleUrls: ['./get-bands-of-user.component.css']
})
export class GetBandsOfUserComponent implements OnInit {

  @Input() user: User;
  bands: Band[] = [];

  constructor(private bandService: BandService) {
  }

  ngOnInit() {
    this.getBandsOfUser();
  }

  // region REST calls
  public getBandsOfUser(): void {
    this.bandService.getBandsOfUser(this.user.email).subscribe(receivedBands => this.bands = receivedBands);
  }

  // endRegion
}
