import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Instrument} from '../../../../model/instrument';
import {InstrumentService} from '../../../../services/instrument/instrument.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-delete-instrument',
  templateUrl: './delete-instrument.component.html',
  styleUrls: ['./delete-instrument.component.css']
})
export class DeleteInstrumentComponent implements OnInit {
  instrument: Instrument;

  constructor(private instrumentService: InstrumentService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.instrumentService.getInstrument(+params['id'])
        .subscribe(receivedInstrument => this.instrument = receivedInstrument);
    });
  }

  public deleteInstrument(): void {
    this.instrumentService.deleteInstrument(this.instrument.id)
      .subscribe(() => {
        },
        () => this.router.navigate(['/instruments'])
      );
  }
}
