import { Component, OnInit } from '@angular/core';
import {musicpiece} from "../../../../model/musicpiece";
import {MusicSheetService} from "../../../../services/music_sheet/music-sheet.service";

@Component({
  selector: 'app-overview-music-sheets',
  templateUrl: './overview-music-sheets.component.html',
  styleUrls: ['./overview-music-sheets.component.css']
})
export class OverviewMusicSheetsComponent implements OnInit {
  pieces: musicpiece[]=[];
  constructor(private mpService: MusicSheetService) { }

  ngOnInit() {
    this.getAllMusicpieces();
  }

  getAllMusicpieces(){
    this.mpService.getpieces().subscribe(getpieces => this.pieces = getpieces);
  }

}
