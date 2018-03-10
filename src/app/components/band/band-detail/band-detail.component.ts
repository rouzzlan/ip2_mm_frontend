import {Component, Input, OnInit} from '@angular/core';
import {BandServiceService} from '../../../services/band.service/band-service.service';
import {Band} from '../../../model/band';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.css']
})
export class BandDetailComponent implements OnInit {

  @Input() bandName: string;
  band: Band = new Band();

  constructor(private bandService: BandServiceService) {
  }

  ngOnInit() {
    this.getBand();
  }

  // region REST calls
  public getBand(): void {
    this.bandService.getBand(this.bandName).subscribe(receivedBand => this.band = receivedBand);
  }

  // endRegion

}
