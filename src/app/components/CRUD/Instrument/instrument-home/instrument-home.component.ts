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
  selectedInstrument: Instrument;
  create = true;
  edit = false;
  detail = false;
  delete = false;

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
  loadCreate() {
    this.create = true;
    this.detail = false;
    this.edit = false;
    this.delete = false;
  }

  loadEdit(instrument: Instrument) {
    this.create = false;
    this.detail = false;
    this.edit = true;
    this.delete = false;
    this.selectedInstrument = instrument;
  }

  loadDelete(instrument: Instrument) {
    this.create = false;
    this.detail = false;
    this.edit = false;
    this.delete = true;
    this.selectedInstrument = instrument;
  }

  loadDetail(instrument: Instrument) {
    this.create = false;
    this.detail = true;
    this.edit = false;
    this.delete = false;
    this.selectedInstrument = instrument;
  }

  onDelete() {
    this.getInstruments();
    this.loadCreate();
  }

  onCreated() {
    this.getInstruments();
    this.loadDetail(this.instruments[this.instruments.length - 1]);
  }

  onEdited() {
    this.loadDetail(this.selectedInstrument);
  }
}
