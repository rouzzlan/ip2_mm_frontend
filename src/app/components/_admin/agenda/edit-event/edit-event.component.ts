import {Component, OnInit} from '@angular/core';
import {Event} from '../../../../model/event';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {BandService} from "../../../../services/band/band.service";
import {Band} from "../../../../model/band";
import {EventService} from "../../../../services/event/event.service";

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  eventToEdit: Event = new Event();
  bands: Band[] = [];

  constructor(private eventService: EventService, private bandService: BandService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventService.getEvent(params['id'])
        .subscribe(receivedEvent => this.eventToEdit = receivedEvent);
    });
    this.getBands();
  }

  private getBands() {
    this.bandService.getBands().subscribe(receivedBands => this.bands = receivedBands);
  }

  // region REST calls

  public updateEvent(eventForm: NgForm) {
    this.eventService.editEvent(this.eventToEdit).subscribe(() => this.router.navigate(['/events/all']));
  }

  // endregion

}
