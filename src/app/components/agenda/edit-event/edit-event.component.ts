import {Component, Input, OnInit} from '@angular/core';
import {EventServiceComponent} from '../../../services/event.service/event-service.component';
import {Event} from '../../../model/event';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  @Input() eventId: number;
  eventToDelete: Event;

  constructor(private eventService: EventServiceComponent) {
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
