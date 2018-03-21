import {Component, OnInit} from '@angular/core';
import {Instrument} from '../../../../model/instrument';
import {ActivatedRoute} from '@angular/router';
import {InstrumentService} from '../../../../services/instrument/instrument.service';

@Component({
  selector: 'app-details-instrument',
  templateUrl: './details-instrument.component.html',
  styleUrls: ['./details-instrument.component.css']
})
export class DetailsInstrumentComponent implements OnInit {
  private instrument: Instrument;

  constructor(private instrumentService: InstrumentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.instrumentService.getInstrument(+params['id'])
        .subscribe(receivedInstrument => this.instrument = receivedInstrument);
    });
  }
}
