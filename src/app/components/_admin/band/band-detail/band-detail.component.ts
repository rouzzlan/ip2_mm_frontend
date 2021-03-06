import {Component, OnInit} from '@angular/core';
import {Band} from '../../../../model/band';
import {BandService} from '../../../../services/band/band.service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.css']
})
export class BandDetailComponent implements OnInit {

  band: Band;

  constructor(private bandService: BandService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bandService.getBand(+params['id'])
        .subscribe(receivedBand => this.band = receivedBand);
    })
  }
}
