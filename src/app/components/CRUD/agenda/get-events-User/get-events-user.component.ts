import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../../model/event';
import {User} from '../../../../model/user';
import {EventService} from '../../../../services/event/event.service';

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
    this.getEventsOfUser();
  }

  // region REST calls
  public getEventsOfUser(): void {
    this.eventService.getEventsOfUser(this.user.email).subscribe(event => this.eventsOfUser = event);
  }

  // endregion

}
