import {Component, Input, OnInit} from '@angular/core';
import {Band} from '../../../../model/band';
import {BandService} from '../../../../services/band/band.service';

@Component({
  selector: 'app-delete-band',
  templateUrl: './delete-band.component.html',
  styleUrls: ['./delete-band.component.css']
})
export class DeleteBandComponent implements OnInit {

  @Input() band: Band;

  constructor(private bandService: BandService) {
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
