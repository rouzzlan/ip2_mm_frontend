import {Component, OnInit} from '@angular/core';
import {Band} from '../../../model/band';
import {BandServiceService} from '../../../services/band.service/band-service.service';

@Component({
  selector: 'app-get-bands',
  templateUrl: './get-bands.component.html',
  styleUrls: ['./get-bands.component.css']
})
export class GetBandsComponent implements OnInit {

  bands: Band[] = [];

  constructor(private bandService: BandServiceService) {
  }

  ngOnInit() {
    this.getBands();
    console.log(this.bands.toString());
  }

  // region REST calls
  public getBands(): void {
    this.bandService.getBands().subscribe(receivedBands => this.bands = receivedBands);
  }

  // endRegion

}
