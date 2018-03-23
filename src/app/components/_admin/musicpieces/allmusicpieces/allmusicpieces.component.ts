import { Component, OnInit } from '@angular/core';
import {MusicPiece} from '../../../../model/musicpiece';
import {MusicpieceService} from '../../../../services/admin/musicpiece.service';

@Component({
  selector: 'app-allmusicpieces',
  templateUrl: './allmusicpieces.component.html',
  styleUrls: ['./allmusicpieces.component.css']
})
export class AllmusicpiecesComponent implements OnInit {
  pieces: MusicPiece[];

  constructor(private service: MusicpieceService) { }

  ngOnInit() {
    this.service.getMusicPieces().subscribe(pieces => this.pieces = pieces);
  }

}
