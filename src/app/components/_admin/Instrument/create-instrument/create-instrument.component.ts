import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Instrument} from '../../../../model/instrument';
import {InstrumentService} from '../../../../services/instrument/instrument.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-instrument',
  templateUrl: './create-instrument.component.html',
  styleUrls: ['./create-instrument.component.css']
})

export class CreateInstrumentComponent implements OnInit {
  newInstrument: Instrument = new Instrument();
  sorts = ['SNAAR', 'SLAG', 'BLAAS'];

  constructor(private instrumentService: InstrumentService, private router: Router) {
  }

  ngOnInit() {
  }

  // region REST calls
  public createInstrument(instrumentForm: NgForm): void {
    this.instrumentService.createInstrument(this.newInstrument)
      .subscribe(response => {
          this.router.navigate(['/instrument/detail/' + response.id]);
        }
      );
  }

  // endregion
}
