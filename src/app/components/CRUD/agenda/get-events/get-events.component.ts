import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {EventService} from '../../../../services/event/event.service';
import {CalendarComponent} from 'ap-angular2-fullcalendar';


@Component({
  selector: 'app-get-events',
  templateUrl: './get-events.component.html',
  styleUrls: ['./get-events.component.css']
})
export class GetEventsComponent implements OnInit, AfterViewInit {
  // mycal here is the #mycal in the HTML
  @ViewChildren('mycal') myCal: QueryList<CalendarComponent>;

  calOptions: any = {};

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.getEventsLessons();
  }

  ngAfterViewInit() {
  }

  // region REST calls
  private getEventsLessons(): void {
    this.eventService.getEventsLessons().subscribe(receivedEventsLessons => {
      this.calOptions = {
        monthNames: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
        timeFormat: 'H:mm',
        dayNamesShort: ['ZO', 'MA', 'DI', 'WO', 'DO', 'VR', 'ZA'],
        buttonText: {
          today: 'vandaag'
        },
        events: receivedEventsLessons
      };
    });
  }
  // endRegion
}
