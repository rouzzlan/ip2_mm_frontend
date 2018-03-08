import {Component, Input, OnInit} from '@angular/core';
import {Instrument} from "../../../model/instrument";

@Component({
  selector: 'app-details-instrument',
  templateUrl: './details-instrument.component.html',
  styleUrls: ['./details-instrument.component.css']
})
export class DetailsInstrumentComponent implements OnInit {
  @Input() instrument: Instrument;
  constructor() { }

  ngOnInit() {
  }

}
