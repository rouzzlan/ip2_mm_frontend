import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../../model/event';
import {User} from '../../../../model/user';
import {EventService} from "../../../../services/event/event.service";

@Component({
  selector: 'app-get-event',
  templateUrl: './get-events-user.component.html',
  styleUrls: ['./get-events-user.component.css']
})
export class GetEventComponent implements OnInit {

  @Input() user: User;
  eventsOfUser: Event[];

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.getEventsOfUser(this.user.id);
  }

  // region REST calls
  public getEventsOfUser(userId: number): void {
    this.eventService.getEventsOfUser(userId).subscribe(event => this.eventsOfUser = event);
  }

  // endregion

}
