import {Component, OnInit} from '@angular/core';
import {Event} from '../../../../model/event';
import {EventService} from '../../../../services/event/event.service';
import {LessonService} from '../../../../services/lesson/lesson.service';
import {Lesson} from '../../../../model/lesson';

@Component({
  selector: 'app-get-all-events',
  templateUrl: './get-all-events.component.html',
  styleUrls: ['./get-all-events.component.css']
})
export class GetAllEventsComponent implements OnInit {

  events: Event[] = [];

  lessons: Lesson[] = [];

  constructor(private eventService: EventService, private lessonSerivce: LessonService) {
  }

  ngOnInit() {
    this.getAllEvents();
    this.getAllLessons();
  }

  // region REST calls
  public getAllEvents(): void {
    this.eventService.getEvents().subscribe(receivedEvents => this.events = receivedEvents);
  }

  public getAllLessons(): void {
    this.lessonSerivce.getLessons().subscribe(receivedLessons => this.lessons = receivedLessons);
  }

  // endRegion

}
