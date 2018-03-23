import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MusicpieceService {

  constructor(private http: HttpClient) {
  }

  createMusicPiece(formData: FormData): Observable<HttpResponse<Object>> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post('http://localhost:8080/music_library/upload/music_piece_2', formData, {headers: headers, observe: 'response'});
  }
}
