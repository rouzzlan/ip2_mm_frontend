import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Instrument} from '../../../../model/instrument';
import {InstrumentService} from '../../../../services/instrument/instrument.service';


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
      .subscribe(next => console.log('next'), error => console.log('error'), () => this.deleted.emit());

  }
}
