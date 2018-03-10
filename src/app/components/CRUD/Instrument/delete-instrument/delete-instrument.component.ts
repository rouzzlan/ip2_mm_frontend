import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
<<<<<<< Updated upstream:src/app/components/CRUD/Instrument/delete-instrument/delete-instrument.component.ts
import {Instrument} from "../../../../model/instrument";
import {InstrumentService} from "../../../../services/instrument/instrument.service";
=======
import {Instrument} from "../../../model/instrument";
import {InstrumentService} from "../../../services/instrument.service/instrument.service";
>>>>>>> Stashed changes:src/app/components/Instrument/delete-instrument/delete-instrument.component.ts

@Component({
  selector: 'app-delete-instrument',
  templateUrl: './delete-instrument.component.html',
  styleUrls: ['./delete-instrument.component.css']
})
export class DeleteInstrumentComponent implements OnInit {
  @Input() instrument: Instrument;
  @Output() deleted = new EventEmitter();

  constructor(private instrumentService: InstrumentService) {
  }

  ngOnInit() {
  }

  public deleteInstrument(): void {
    this.instrumentService.deleteInstrument(this.instrument)
      .subscribe(next => console.log("next"), error => console.log("error"), () => this.deleted.emit())

  }
}
