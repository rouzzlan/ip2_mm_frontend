import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Instrument} from '../../../../model/instrument';
import {NgForm} from '@angular/forms';
import {InstrumentService} from '../../../../services/instrument/instrument.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-instrumentent',
  templateUrl: './edit-instrumentent.component.html',
  styleUrls: ['./edit-instrumentent.component.css']
})
export class EditInstrumententComponent implements OnInit {
  instrument: Instrument;
  sorts = ['SNAAR', 'SLAG', 'BLAAS'];

  constructor(private instrumentService: InstrumentService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.instrumentService.getInstrument(+params['id'])
        .subscribe(receivedInstrument => this.instrument = receivedInstrument);
    })
  }

  // region REST calls
  public editInstrument(instrumentForm: NgForm): void {
    this.instrumentService.editInstrument(this.instrument)
      .subscribe();
  }
  // endregion
}
