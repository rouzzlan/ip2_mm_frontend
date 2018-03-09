import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../../model/event';
import {NgForm} from '@angular/forms';
import {EventService} from "app/services/event/event.service";

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  @Input() eventId: number;
  eventToDelete: Event;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.getEvent(this.eventId);
  }

  // region REST calls
  public getEvent(eventId: number): void {
    this.eventService.getEvent(eventId).subscribe(event => this.eventToDelete = event);
  }

  public updateEvent(eventForm: NgForm) {
    this.eventService.editEvent(this.eventToDelete);
  }

  // endregion

}
