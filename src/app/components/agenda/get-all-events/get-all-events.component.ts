import {Component, OnInit} from '@angular/core';
import {Event} from '../../../model/event';
import {EventService} from '../../../services/event/event.service';

@Component({
  selector: 'app-get-all-events',
  templateUrl: './get-all-events.component.html',
  styleUrls: ['./get-all-events.component.css']
})
export class GetAllEventsComponent implements OnInit {

  events: Event[] = [];

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.getAllEvents();
  }

  // region REST calls
  public getAllEvents(): void {
    this.eventService.getEvents().subscribe(receivedEvents => this.events = receivedEvents);
  }

  // endRegion

}
