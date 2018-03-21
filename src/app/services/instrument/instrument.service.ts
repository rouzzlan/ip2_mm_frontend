import {Injectable} from '@angular/core';
import {Instrument} from "../../model/instrument";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class InstrumentService {
  private path = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) {
  }

  public createInstrument(newInstrument: Instrument): Observable<Instrument> {
    return this.http.post<Instrument>(this.path + '/addinstrument', newInstrument);
  }

  public getInstrument(instrumentid: number): Observable<Instrument> {
    return this.http.get<Instrument>(this.path + '/getinstrument/' + instrumentid);
  }

  public getInstruments(): Observable<Instrument[]> {
    return this.http.get<Instrument[]>(this.path + '/getinstruments');
  }

  public editInstrument(instrument: Instrument) {
    return this.http.put(this.path + '/editinstrument/' + instrument.id, instrument);
  }

  public deleteInstrument(id: number) {
    return this.http.delete(this.path + '/deleteinstrument/' + id);

  }
}
