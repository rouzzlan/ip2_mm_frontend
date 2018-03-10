import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Band} from '../../model/band';
import {forEach} from '@angular/router/src/utils/collection';
import {User} from '../../model/user';

@Injectable()
export class BandServiceService {

  private path = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) {
  }

  // region Band calls
  public createBand(bandToCreate: Band): Observable<Band> {
    return this.http.post<Band>(this.path + '/addband', bandToCreate);
  }

  public getBand(bandName: string): Observable<Band> {
    return this.http.get<Band>(this.path + '/getband/' + bandName);
  }

  public getBands(): Observable<Band[]> {
    return this.http.get<Band[]>(this.path + '/getbands');
  }

  public getBandsOfUser(userEmail: String): Observable<Band[]> {
    return this.http.get<Band[]>(this.path + '/getbands' + userEmail);
  }

  public editBand(bandToEdit: Band): Observable<Band> {
    return null /*this.http.put<Band>(this.path + '/editband/' + bandToEdit)*/;
  }

  public deleteBand(bandToDelete: Band): Observable<Band> {
    return this.http.delete<Band>(this.path + '/deleteband/' + bandToDelete);
  }

  // endRegion

}
