import { Component, OnInit } from '@angular/core';
import {InstrumentService} from "../../../services/instrument/instrument.service";
import {MusicpieceService} from "../../../services/musicpiece/musicpiece.service";
import {Instrument} from "../../../model/instrument";
import {musicpiece} from "../../../model/musicpiece";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  pieces: musicpiece[]=[];
  instruments: Instrument[]=[];
  constructor(private instrumentService: InstrumentService, private mpService:MusicpieceService) { }

  ngOnInit() {
    this.getInstruments();
    this.getAllMusicpieces();
  }

  // region REST calls
  getInstruments(): void {
    this.instrumentService.getInstruments().subscribe(receivedInstruments => this.instruments = receivedInstruments);
  }

  getAllMusicpieces(){
    this.mpService.getpieces().subscribe(getpieces => this.pieces = getpieces);
  }
}
