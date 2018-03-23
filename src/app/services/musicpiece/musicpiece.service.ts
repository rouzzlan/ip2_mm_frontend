import { Injectable } from '@angular/core';
import {musicpiece} from "../../model/musicpiece";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Band} from "../../model/band";

@Injectable()
export class MusicpieceService {
  private path = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) { }

  getpieces():  Observable<musicpiece[]> {
    return this.http.get<musicpiece[]>(this.path + '/getmusicpieces');
  }

  editMusicPiece(musicpiece: musicpiece) {
    return this.http.put<musicpiece>(this.path + '/editmusicpiece/',musicpiece.id, musicpiece);
  }

  getMusicpiece(number: number, user):  Observable<musicpiece> {
    let params = new HttpParams();
    params = params.append('musicPieceId', number.toString());
    params = params.append('userId', user.toString());

    return this.http.get<musicpiece>(this.path + '/getmusicpiece', {params: params});
  }

  createMusicpiece(newMusicpiece: musicpiece):  Observable<musicpiece>  {
    return this.http.post<musicpiece>(this.path + 'createmusicpiece', newMusicpiece)
  }
}

