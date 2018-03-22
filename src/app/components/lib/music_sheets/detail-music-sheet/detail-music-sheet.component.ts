import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../../model/user';
import {musicpiece} from "../../../../model/musicpiece";
import {ActivatedRoute} from "@angular/router";
import {MusicSheetService} from "../../../../services/music_sheet/music-sheet.service";
import {OSMD} from 'opensheetmusicdisplay';
import ChordSheetJS from 'chordsheetjs';
import 'rxjs/add/observable/interval';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-detail-music-sheet',
  templateUrl: './detail-music-sheet.component.html',
  styleUrls: ['./detail-music-sheet.component.css']
})
export class DetailMusicSheetComponent implements OnInit {
  musicpiece: musicpiece;
  userId: number = 3;
  @ViewChild('mpshow') divmp;
//  @Input() user: User;
  osmd: OSMD;
  zoom: number = 0.55;
  tempo: number = 280;
  tempos = [-2,-1,0,1,2];
  ratings = [0,1,2,3,4,5];
  sub: any;
  audio: any;
  checkboxvalue: boolean = true;
  isaudio:boolean;

  constructor(private mpService: MusicSheetService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mpService.getMusicpiece(+params['id'])
        .subscribe(receivedmp => this.musicpiece = receivedmp);
    })
    /*if(this.musicpiece.typeofpiece != 'akkoord'){
      let d = document.getElementById("showmp");
      this.osmd = new OSMD(d, false);
      this.osmd.zoom = this.zoom;
      this.osmd.load(this.musicpiece.musicxml)     .then(
        () => this.osmd.render(),
        (err) => console.log(err)
      )
        .then(
          () => console.log("Sheet music displayed."),
          (err) => console.log(err)
        );
    }
    this.setboolean();*/
  }

  globalStart(){
    if(this.checkboxvalue){
      this.metAudio();
    }else{
      this.starttwee();
    }
  }

  globalstop(){
    if(this.checkboxvalue){
      this.stopmetAudio();
    }else{
      this.stop();
    }
  }

  zoomuit() {
    this.zoom = this.zoom / 1.2;
    this.scale();
  }
  zoomin() {
    this.zoom = this.zoom * 1.2;
    this.scale();
  }

  next() {
    this.osmd.cursor.next()
  }

  scale() {
    this.osmd.zoom = this.zoom;
    this.osmd.render();
  }
  start(){
    this.osmd.cursor.show();
  }
  starttwee(){
    this.start();
    this.sub = Observable.interval(this.tempo)
      .subscribe((val) => { this.next(); /*this.scrollToBottom()*/ })
  }

  reset(){
    this.sub.unsubscribe();
    this.osmd.cursor.reset();
  }

  stop(){
    this.sub.unsubscribe();
  }

  changedTempo(t){
    switch (t){
      case 0: this.tempo = 280; break;
      case -1: this.tempo = 250; break;
      case -2: this.tempo = 200; break;
      case 1: this.tempo = 300; break;
      case 2: this.tempo = 350; break;
    }
  }
//audio
  metAudio(){
    this.tempo = 280;
    this.osmd.cursor.reset();
    this.starttwee();
    this.audio = new Audio();
    this.audio.src= this.musicpiece.audio;
    this.audio.load();
    this.audio.play();

  }

  stopmetAudio(){
    this.sub.unsubscribe();
    this.audio.pause();
    this.audio.currentTime = 0;
    this.osmd.cursor.reset();
  }
  //akkoordschema's

  getChord() {
    const parser = new ChordSheetJS.ChordProParser();
    const song = parser.parse(this.musicpiece.text);
    const formatter = new ChordSheetJS.HtmlTableFormatter();
    return formatter.format(song);
  }

  /* getyoutubevideo() {
     return this.musicpiece.youtubeURL.replace("https://www.youtube.com/watch?v=", "")
   }*/

  setboolean(){
    if(this.musicpiece.audio != null){
      this.isaudio = false;

    }else{
      this.isaudio = true;
    }

  }


}
