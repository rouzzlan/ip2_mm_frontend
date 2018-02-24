import {Component, Input, OnInit} from '@angular/core';
import {EventServiceComponent} from '../../../services/event.service/event-service.component';
import {Event} from '../../../model/event';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {

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

  public deleteEvent(deleteEventForm: NgForm): void {
  //   this.eventService.deleteEvent(this.eventToDelete);
   }

  // endregion

}
