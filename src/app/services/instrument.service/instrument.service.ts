import { Injectable } from '@angular/core';
import {Instrument} from "../../model/instrument";
import {HttpClient} from "@angular/common/http";
import {User} from "../../model/user";
import {Observable} from "rxjs/Observable";

@Injectable()
export class InstrumentService {
  private path = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) { }

  public createInstrument(newInstrument: Instrument): Observable<Instrument> {
    return this.http.post<Instrument>(this.path + '/addinstrument', newInstrument);
  }

  public getInstruments(): Observable<Instrument[]> {
      return this.http.get<Instrument[]>(this.path + '/getinstruments');
  }
}
