import {Component, OnInit} from '@angular/core';
import {Instrument} from '../../../../model/instrument';
import {InstrumentService} from '../../../../services/instrument/instrument.service';

@Component({
  selector: 'app-instrument-home',
  templateUrl: './instrument-home.component.html',
  styleUrls: ['./instrument-home.component.css']
})
export class InstrumentHomeComponent implements OnInit {
  instruments: Instrument[] = [];

  constructor(private instrumentService: InstrumentService) {
  }

  ngOnInit() {
    this.getInstruments();
  }

  // region REST calls
  getInstruments(): void {
    this.instrumentService.getInstruments().subscribe(receivedInstruments => this.instruments = receivedInstruments);
  }

  // endregion
}
