import {Component, OnInit} from '@angular/core';
import {Band} from '../../../../model/band';
import {BandService} from '../../../../services/band/band.service';

@Component({
  selector: 'app-get-bands',
  templateUrl: './get-bands.component.html',
  styleUrls: ['./get-bands.component.css']
})
export class GetBandsComponent implements OnInit {
  bands: Band[] = [];

  constructor(private bandService: BandService) {
  }

  ngOnInit() {
    this.getBands();
  }

  // region REST calls
  public getBands(): void {
    this.bandService.getBands().subscribe(receivedBands => this.bands = receivedBands);
  }

  // endRegion
}
