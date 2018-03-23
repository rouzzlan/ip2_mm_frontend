import {Injectable} from '@angular/core';
import {Instrument} from "../../model/instrument";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class InstrumentService {
  private path = 'https://ip2-mm-backend.herokuapp.com/instrument';

  constructor(private http: HttpClient) {
  }

  public createInstrument(newInstrument: Instrument): Observable<Instrument> {
    return this.http.post<Instrument>(this.path + '/add', newInstrument);
  }

  public getInstrument(instrumentid: number): Observable<Instrument> {
    return this.http.get<Instrument>(this.path + '/id/' + instrumentid);
  }

  public getInstruments(): Observable<Instrument[]> {
    return this.http.get<Instrument[]>(this.path + '/get');
  }

  public editInstrument(instrument: Instrument) {
    return this.http.put(this.path + '/edit/' + instrument.id, instrument);
  }

  public deleteInstrument(id: number) {
    return this.http.delete(this.path + '/delete/' + id);

  }
}
