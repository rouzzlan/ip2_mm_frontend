import {Component, Input, OnInit} from '@angular/core';
import {EventServiceComponent} from '../../../services/event.service/event-service.component';
import {Event} from '../../../model/event';
import {User} from '../../../model/user';

@Component({
  selector: 'app-get-event',
  templateUrl: './get-events-user.component.html',
  styleUrls: ['./get-events-user.component.css']
})
export class GetEventComponent implements OnInit {

  @Input() user: User;
  eventsOfUser: Event[];

  constructor(private eventService: EventServiceComponent) {
  }

  ngOnInit() {
    this.getEventsOfUser();
  }

  // region REST calls
  public getEventsOfUser(): void {
    this.eventService.getEventsOfUser(this.user.email).subscribe(event => this.eventsOfUser = event);
  }

  // endregion

}
