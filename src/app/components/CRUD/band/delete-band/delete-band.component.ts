///<reference path="../../../../../../node_modules/@angular/router/src/router.d.ts"/>
import {Component, Input, OnInit} from '@angular/core';
import {Band} from '../../../../model/band';
import {BandService} from '../../../../services/band/band.service';
import {
  ActivatedRoute,
  Router,
} from "@angular/router";

@Component({
  selector: 'app-delete-band',
  templateUrl: './delete-band.component.html',
  styleUrls: ['./delete-band.component.css']
})
export class DeleteBandComponent implements OnInit {

  band: Band = new Band();

  constructor(private bandService: BandService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.getBand();
  }

  // region REST calls

  public getBand(): void {
    this.route.params.subscribe(params => {
      this.bandService.getBand(params['bandName'])
        .subscribe(receivedBand => this.band = receivedBand,
          error => console.log('error'),
          () => {
            console.log(this.band);
          }
        );
    });
  }

  public deleteBand(): void {
    this.bandService.deleteBand(this.band).subscribe();
  }
// endregion
}
