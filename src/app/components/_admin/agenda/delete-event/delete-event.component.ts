import {Component, OnInit} from '@angular/core';
import {Event} from '../../../../model/event';
import {EventService} from '../../../../services/event/event.service';
import {ActivatedRoute, Router,} from '@angular/router';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {

  eventToDelete: Event;

  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) {
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

  public deleteEvent(): void {
    this.eventService.deleteEvent(this.eventToDelete).subscribe(() => this.router.navigate(['/events/all']));
  }

  // endregion

}
