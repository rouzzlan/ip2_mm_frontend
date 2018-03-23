import {Component, Input, OnInit} from '@angular/core';
import {musicpiece} from "../../../../model/musicpiece";
import {MusicpieceService} from "../../../../services/musicpiece/musicpiece.service";

@Component({
  selector: 'app-list-musicpiece',
  templateUrl: './list-musicpiece.component.html',
  styleUrls: ['./list-musicpiece.component.css']
})
export class ListMusicpieceComponent implements OnInit {

  pieces: musicpiece[]=[];
  constructor(private mpService: MusicpieceService) { }

  ngOnInit() {
    this.getAllMusicpieces();
  }

  getAllMusicpieces(){
    this.mpService.getpieces().subscribe(getpieces => this.pieces = getpieces);
  }
}
