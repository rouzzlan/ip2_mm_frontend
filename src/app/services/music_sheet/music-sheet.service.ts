import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {musicpiece} from "../../model/musicpiece";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MusicSheetService {
  private path = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) { }

  getpieces():  Observable<musicpiece[]> {
    return this.http.get<musicpiece[]>(this.path + '/music_library/musicpieces');
  }

  editMusicPiece(musicpiece: musicpiece) {
    return this.http.put<musicpiece>(this.path + '/music_library/editmusicpiece/',musicpiece.id);
  }

  getMusicpiece(mp: number):  Observable<musicpiece> {
   return this.http.get<musicpiece>(this.path + '/music_library/musicpiece/' + mp);

  }

  createMusicpiece(newMusicpiece: musicpiece):  Observable<musicpiece>  {
    return this.http.post<musicpiece>(this.path + '/music_library/createmusicpiece', newMusicpiece)
  }
}
