import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Event} from '../../model/event';
import {Observable} from 'rxjs/Observable';
import {EventLessons} from '../../model/eventLessons';

@Injectable()
export class EventService {
  private path = 'http://localhost:8080/event';

  constructor(private http: HttpClient) {
  }

  // region Event calls
  public createEvent(eventToCreate: Event): Observable<Event> {
    return this.http.post<Event>(this.path + '/add', eventToCreate);
  }

  public getEvent(eventId: number): Observable<Event> {
    return this.http.get<Event>(this.path + '/id/' + eventId);
  }

  public getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.path + '/get');
  }

  public getEventsLessons(): Observable<EventLessons[]> {
    return this.http.get<EventLessons[]>(this.path + '/geteventslessons');
  }

  public getEventsLessonsOfStudent(id: number): Observable<EventLessons[]> {
    return this.http.get<EventLessons[]>(this.path + '/geteventslessonsfromstudent/' + id);
  }

  public getEventsOfUser(userEmail: String): Observable<Event[]> {
    return this.http.get<Event[]>(this.path + '/getevents/' + userEmail);
  }

  public editEvent(eventToUpdate: Event): Observable<Event> {
    return this.http.put<Event>(this.path + '/edit', eventToUpdate);
  }

  public deleteEvent(eventId: number) {
    return this.http.delete<Event>(this.path + '/delete/' + eventId);
  }

  // endRegion
}
