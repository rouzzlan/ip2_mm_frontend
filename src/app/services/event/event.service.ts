import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Event} from '../../model/event';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EventService {
  private path = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) {
  }

  // region Event calls
  public createEvent(eventToCreate: Event): Observable<Event> {
    return this.http.post<Event>(this.path + '/addevent', eventToCreate);
  }

  public getEvent(eventId: number): Observable<Event> {
    return this.http.get<Event>(this.path + '/getevent/' + eventId);
  }

  public getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.path + '/getevents');
  }

  public getEventsOfUser(userEmail: String): Observable<Event[]> {
    return this.http.get<Event[]>(this.path + '/getevents/' + userEmail);
  }

  public editEvent(eventToUpdate: Event): Observable<Event> {
    return this.http.put<Event>(this.path + '/editevent', eventToUpdate);
  }

  public deleteEvent(eventId: number) {
    return this.http.delete(this.path + '/deleteevent/' + eventId);
  }

  // endRegion
}
