import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Band} from '../../model/band';

@Injectable()
export class BandService {

  private path = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) {
  }

  // region Band calls
  public createBand(bandToCreate: Band): Observable<Band> {
    return this.http.post<Band>(this.path + '/addband', bandToCreate);
  }

  public getBand(bandId: number): Observable<Band> {
    return this.http.get<Band>(this.path + '/getband/' + bandId);
  }

  public getBands(): Observable<Band[]> {
    return this.http.get<Band[]>(this.path + '/getbands');
  }

  public getBandsOfUser(userId: number): Observable<Band[]> {
    return this.http.get<Band[]>(this.path + '/getbands/' + userId);
  }

  public editBand(bandToEdit: Band) {
    return this.http.put<Band>(this.path + '/editband/' + bandToEdit.id, bandToEdit);
  }

  public deleteBand(bandToDelete: Band) {
    return this.http.delete<Band>(this.path + '/deleteband/' + bandToDelete.id);
  }
  // endregion
}
