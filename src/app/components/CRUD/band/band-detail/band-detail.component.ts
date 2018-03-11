import {Component, Input, OnInit} from '@angular/core';
import {Band} from '../../../../model/band';
import {BandService} from '../../../../services/band/band.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.css']
})
export class BandDetailComponent implements OnInit {

  // @Input() bandName: string;
  private band: Band =
    {id: 0, name: '', teacher: '', students: []};

  constructor(private bandService: BandService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.bandService.getBand('bandName'))
      .subscribe(receivedBand => this.band = receivedBand);
    // this.getBand();
  }

  // region REST calls
  // public getBand(): void {
  //   this.bandService.getBand(this.bandName).subscribe(receivedBand => this.band = receivedBand);
  // }

  // endRegion

}
