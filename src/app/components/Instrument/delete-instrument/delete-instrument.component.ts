import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Instrument} from "../../../model/instrument";
import {NgForm} from "@angular/forms";
import {InstrumentService} from "../../../services/instrument.service/instrument.service";
import {InstrumentHomeComponent} from "../instrument-home/instrument-home.component";

@Component({
  selector: 'app-delete-instrument',
  templateUrl: './delete-instrument.component.html',
  styleUrls: ['./delete-instrument.component.css']
})
export class DeleteInstrumentComponent implements OnInit {
  @Input() instrument: Instrument;
  @Output() deleted = new EventEmitter();
  constructor(private instrumentService: InstrumentService) { }

  ngOnInit() {
  }
  public deleteInstrument(): void {
    this.instrumentService.deleteInstrument(this.instrument)
      .subscribe();
    this.deleted.emit();
  }
}
