import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../../model/event';
import {NgForm} from '@angular/forms';
import {EventService} from "../../../../services/event/event.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {
  eventToDelete: Event;

  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getEvent();
  }

  // region REST calls
  public getEvent(): void {
    this.route.params.subscribe(params => {
      this.eventService.getEvent(params['id'])
        .subscribe(receivedEvent => this.eventToDelete = receivedEvent);
    });
  }

  public deleteEvent(deleteEventForm: NgForm): void {
    this.eventService.deleteEvent(this.eventToDelete.id).subscribe();
  }

  // endregion
}
