import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Event} from '../../../model/event';
import {EventServiceComponent} from '../../../services/event.service/event-service.component';
import {Band} from '../../../model/band';
import {BandServiceService} from '../../../services/band.service/band-service.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateeventComponent implements OnInit {

  newEvent: Event = new Event();
  events: Event[] = [];
  bands: Band[] = [];

  constructor(private eventService: EventServiceComponent, private bandService: BandServiceService) {
  }

  ngOnInit() {
    this.getBands();
  }

  // region REST Calls

  public createEvent(eventForm: NgForm): void {
    console.log(this.newEvent);
    this.eventService.createEvent(this.newEvent)
      .subscribe(createEvent => {
        eventForm.reset();
        this.newEvent = new Event();
        this.events.unshift(createEvent);
      });
  }

  public getBands(): void {
    this.bandService.getBands().subscribe(bands => this.bands = bands);
  }

  // endregion

}
