import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Band} from '../../model/band';

@Injectable()
export class BandService {

  private path = 'http://localhost:8080/band';

  constructor(private http: HttpClient) {
  }

  // region Band calls
  public createBand(bandToCreate: Band): Observable<Band> {
    return this.http.post<Band>(this.path + '/add', bandToCreate);
  }

  public getBand(bandId: number): Observable<Band> {
    return this.http.get<Band>(this.path + '/id/' + bandId);
  }

  public getBands(): Observable<Band[]> {
    return this.http.get<Band[]>(this.path + '/get');
  }

  public getBandsOfUser(userId: number): Observable<Band[]> {
    return this.http.get<Band[]>(this.path + '/id/' + userId);
  }

  public editBand(bandToEdit: Band) {
    return this.http.put<Band>(this.path + '/edit/' + bandToEdit.id, bandToEdit);
  }

  public deleteBand(bandToDelete: Band) {
    return this.http.delete<Band>(this.path + '/delete/' + bandToDelete.id);
  }
  // endregion
}
