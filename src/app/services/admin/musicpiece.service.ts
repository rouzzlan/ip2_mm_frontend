import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {MusicPiece} from '../../model/musicpiece';

@Injectable()
export class MusicpieceService {
  private base = 'http://localhost:8080/music_library';

  constructor(private http: HttpClient) {
  }

  createMusicPiece(formData: FormData): Observable<HttpResponse<Object>> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post('/upload/music_piece_2', formData, {headers: headers, observe: 'response'});
  }

  getMusicPieces(): Observable<MusicPiece[]> {
    return this.http.get<MusicPiece[]>(this.base + '/musicpieces');
  }
}
