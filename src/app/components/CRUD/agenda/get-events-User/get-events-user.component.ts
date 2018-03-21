import {AfterViewInit, Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Event} from '../../../../model/event';
import {User} from '../../../../model/user';
import {EventService} from '../../../../services/event/event.service';
import {CalendarComponent} from 'ap-angular2-fullcalendar';

@Component({
  selector: 'app-get-event',
  templateUrl: './get-events-user.component.html',
  styleUrls: ['./get-events-user.component.css']
})
export class GetEventsUserComponent implements OnInit, AfterViewInit {

  // mycal here is the #mycal in the HTML
  @ViewChildren('mycal') myCal: QueryList<CalendarComponent>;

  calOptions: any = {};

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.getEventsLessonsOfStudents();
  }

  ngAfterViewInit() {
  }

  // region REST calls
  private getEventsLessonsOfStudents(): void {
    this.eventService.getEventsLessonsOfStudent(2).subscribe(receivedEventsLessons => {
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
