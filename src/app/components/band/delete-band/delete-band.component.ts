import {Component, Input, OnInit} from '@angular/core';
import {Band} from '../../../model/band';
import {BandServiceService} from '../../../services/band.service/band-service.service';

@Component({
  selector: 'app-delete-band',
  templateUrl: './delete-band.component.html',
  styleUrls: ['./delete-band.component.css']
})
export class DeleteBandComponent implements OnInit {

  @Input() band: Band;

  constructor(private bandService: BandServiceService) {
  }

  ngOnInit() {
    this.getBand();
  }

  // region REST calls

  public getBand(): void {
    this.bandService.getBand(this.band.name).subscribe(b => this.band = b);
  }

  public deleteBand(): void {
    this.bandService.deleteBand(this.band);
  }

  // endregion

}
