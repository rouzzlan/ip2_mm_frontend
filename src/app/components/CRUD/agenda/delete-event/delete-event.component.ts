import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../../model/event';
import {NgForm} from '@angular/forms';
import {EventService} from "../../../../services/event/event.service";

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {

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

  public deleteEvent(deleteEventForm: NgForm): void {
  //   this.eventService.deleteEvent(this.eventToDelete);
   }

  // endregion

}
