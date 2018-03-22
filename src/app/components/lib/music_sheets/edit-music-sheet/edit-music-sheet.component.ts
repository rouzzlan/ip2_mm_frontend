import { Component, OnInit } from '@angular/core';
import {musicpiece} from "../../../../model/musicpiece";
import {MusicSheetService} from "../../../../services/music_sheet/music-sheet.service";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/markdown/markdown';
import ChordSheetJS from 'chordsheetjs';
import {language} from "../../../../model/language";


@Component({
  selector: 'app-edit-music-sheet',
  templateUrl: './edit-music-sheet.component.html',
  styleUrls: ['./edit-music-sheet.component.css']
})
export class EditMusicSheetComponent implements OnInit {
  musicpiece: musicpiece = new musicpiece();
  types = ["akkoordschema", "pianoakkoorden", "gitaarakkoorden", "andere"];
  difficulty = ["easy", "intermediate", "advanced", "andere"];
  typeofmusicpiece = ["akkoord", "muziekpartituren"];
  lang: string;
  l:language;

  constructor(private mpService: MusicSheetService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mpService.getMusicpiece(+params['id'])
        .subscribe(receivedmp => this.musicpiece = receivedmp);
    })

    const textarea = document.getElementById('cs-edit-title-textarea') as HTMLTextAreaElement
    const heightLimit = 200 /* Maximum height: 200px */

    function adjustTextAreaHeight() {
      textarea.style.height = '' /* Reset the height*/
      textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + 'px'
    }
    // Adjust the text area height now...
    adjustTextAreaHeight()

    // and on every textarea input
    textarea.oninput = () => {
      adjustTextAreaHeight()
    }

    // Setup our content editor area using codemirror
    const editor = CodeMirror(
      document.getElementById('cs-edit-content-area'), {
        lineNumbers: false,
        mode: 'markdown',
        lineWrapping: true,
        value: this.musicpiece.text,
        viewportMargin: Infinity,
        tabindex: 2
      }
    )

    editor.focus()

    // Update the model on every change
    CodeMirror.on(
      editor.getDoc(),
      'change',
      (instance, change) => this.musicpiece.text = editor.getValue()
    )


  }

  public editpiece(musicpieceForm: NgForm): void {
    this.l = new language;
    this.l.language = this.lang;
    this.musicpiece.language = this.l;
    this.mpService.editMusicPiece(this.musicpiece)
      .subscribe();
  }


  getResult(){
    if(this.musicpiece.typeofpiece == "akkoord"){
      this.getChord();
    }else{
      this.getSheet()
    }

  }

  getSheet(){

  }

  getChord(){
    const parser = new ChordSheetJS.ChordProParser();
    const song = parser.parse(this.musicpiece.text);
    const formatter = new ChordSheetJS.HtmlTableFormatter();
    return formatter.format(song);
  }
  onaudiofilechange(event){

  }


}
