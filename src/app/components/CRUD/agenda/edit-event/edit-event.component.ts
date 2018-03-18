import {Component, OnInit} from '@angular/core';
import {Event} from '../../../../model/event';
import {NgForm} from '@angular/forms';
import {EventService} from "app/services/event/event.service";
import {BandService} from "../../../../services/band/band.service";
import {ActivatedRoute} from "@angular/router";
import {Band} from "../../../../model/band";

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  eventToEdit: Event;
  bands: Band[] = [];

  constructor(private eventService: EventService, private bandService: BandService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventService.getEvent(params['id'])
        .subscribe(receivedEvent => this.eventToEdit = receivedEvent);
    });
    this.getBands();
  }

  // region REST calls
  public updateEvent(eventForm: NgForm) {
    this.eventService.editEvent(this.eventToEdit).subscribe();
  }

  // endregion

  //region BAND calls
  private getBands() {
    this.bandService.getBands().subscribe(receivedBands => this.bands = receivedBands);
  }

  //endregion
}
