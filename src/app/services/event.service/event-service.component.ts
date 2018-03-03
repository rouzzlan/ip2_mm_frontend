import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Event} from '../../model/event';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EventServiceComponent {
  private path = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) {
  }

  // region Event calls
  public createEvent(eventToCreate: Event): Observable<Event> {
    return this.http.post<Event>(this.path + '/addEvent', eventToCreate);
  }

  public getEvent(eventId: number): Observable<Event> {
    return this.http.get<Event>(this.path + '/getEvents/' + eventId);
  }

  public getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.path + '/getEvents');
  }

  public getEventsOfUser(userId: number): Observable<Event[]> {
    return this.http.get<Event[]>(this.path + '/getEvents/' + userId);
  }

  public editEvent(eventToUpdate: Event): Observable<Event> {
    return this.http.put<Event>(this.path + '/editEvent', eventToUpdate);
  }

  // public deleteEvent(eventToDelete: Event) {
  //   this.http.delete<Event>(this.path + '/deleteEvent', eventToDelete);
  // }

  // endRegion


}


