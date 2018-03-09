import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Event} from '../../../../model/event';
import {Band} from '../../../../model/band';
import {EventService} from "../../../../services/event/event.service";
import {BandService} from "../../../../services/band/band.service";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  newEvent: Event = new Event();
  events: Event[] = [];
  bands: Band[] = [];

  constructor(private eventService: EventService, private bandService: BandService) {
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
