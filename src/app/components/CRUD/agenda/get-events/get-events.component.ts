import { Component, OnInit } from '@angular/core';
import {EventService} from "../../../../services/event/event.service";
import {Event} from "../../../../model/event";

@Component({
  selector: 'app-get-events',
  templateUrl: './get-events.component.html',
  styleUrls: ['./get-events.component.css']
})
export class GetEventsComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  private getEvents(): void {
    this.eventService.getEvents().subscribe(receivedEvents => this.events = receivedEvents);
  }
}
