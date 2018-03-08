import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Instrument} from "../../../model/instrument";
import {NgForm} from "@angular/forms";
import {InstrumentService} from "../../../services/instrument.service/instrument.service";

@Component({
  selector: 'app-create-instrument',
  templateUrl: './create-instrument.component.html',
  styleUrls: ['./create-instrument.component.css']
})

export class CreateInstrumentComponent implements OnInit {
  instruments: Instrument[] = [];
  newInstrument: Instrument = new Instrument();
  sorts = ["SNAAR", "SLAG", "BLAAS"];
  selectedValue = null;
  @Output() created = new EventEmitter<Instrument>();

  constructor(private instrumentService: InstrumentService) {
  }

  ngOnInit() {
  }

  // region REST calls
  public createInstrument(instrumentForm: NgForm): void {
    this.instrumentService.createInstrument(this.newInstrument)
      .subscribe(createInstrument => {
        instrumentForm.reset();
        this.newInstrument = new Instrument();
        this.instruments.unshift(createInstrument);
      });
    this.created.emit(this.newInstrument);
  }
  // endregion
}
