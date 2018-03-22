import { Component, OnInit } from '@angular/core';
import {musicpiece} from "../../../model/musicpiece";
import {Instrument} from "../../../model/instrument";
import {MusicSheetService} from "../../../services/music_sheet/music-sheet.service";
import {InstrumentService} from "../../../services/instrument/instrument.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  pieces: musicpiece[]=[];
  instruments: Instrument[]=[];
  countpieces : number= null;
  countinstruments: number = null;
  searchText: String;

  // constructor(private instrumentService: InstrumentService, private mpService:MusicpieceService) { }
 // constructor(private searchService: SearchService) { }
  constructor( private mpService:MusicSheetService, private instrService: InstrumentService){}

  ngOnInit() {
    this.mpService.getpieces().subscribe(getpieces => this.pieces = getpieces);
    this.countpieces = this.pieces.length;

    this.instrService.getInstruments().subscribe(getinstruments => this.instruments = getinstruments)
    this.countinstruments = this.instruments.length;
    /*  this.searchService.getsearch().subscribe(received => this.search = received);
   this.pieces = this.search.musicPieceList;
   this.instruments = this.search.instrumentList;
   this.countpieces = this.pieces.length;
   this.countinstruments = this.instruments.length;*/
  }

  // region REST calls
  /*getInstruments(): void {
    this.instrumentService.getInstruments().subscribe(receivedInstruments => this.instruments = receivedInstruments);
  }

  getAllMusicpieces(){
    this.mpService.getpieces().subscribe(getpieces => this.pieces = getpieces);
  }*/
}
