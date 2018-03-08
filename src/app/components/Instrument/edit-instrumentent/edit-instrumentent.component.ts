import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Instrument} from "../../../model/instrument";
import {NgForm} from "@angular/forms";
import {InstrumentService} from "../../../services/instrument.service/instrument.service";

@Component({
  selector: 'app-edit-instrumentent',
  templateUrl: './edit-instrumentent.component.html',
  styleUrls: ['./edit-instrumentent.component.css']
})
export class EditInstrumententComponent implements OnInit {
  @Input() instrument: Instrument;
  sorts = ["SNAAR", "SLAG", "BLAAS"];
  @Output() edited = new EventEmitter<Instrument>();

  constructor(private instrumentService: InstrumentService) { }

  ngOnInit() {
  }

  // region REST calls
  public editInstrument(instrumentForm: NgForm): void {
    this.instrumentService.editInstrument(this.instrument)
      .subscribe();
    this.edited.emit();

  }
  // endregion

}
