import { Component, OnInit } from '@angular/core';
import {musicpiece} from "../../../../model/musicpiece";
import {MusicSheetService} from "../../../../services/music_sheet/music-sheet.service";
import ChordSheetJS from 'chordsheetjs';
import * as CodeMirror from 'codemirror'
import 'codemirror/mode/markdown/markdown'
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {language} from "../../../../model/language";

@Component({
  selector: 'app-create-music-sheet',
  templateUrl: './create-music-sheet.component.html',
  styleUrls: ['./create-music-sheet.component.css']
})
export class CreateMusicSheetComponent implements OnInit {
  newMusicpiece: musicpiece = new musicpiece();
  types = ["akkoordschema", "pianoakkoorden", "gitaarakkoorden", "andere"];
  difficulty = ["easy", "intermediate", "advanced", "andere"];
  typeofmusicpiece = ["akkoord", "muziekpartituren"];
  lang: string;
  l:language;
  constructor(private mpService: MusicSheetService, private router: Router) {
  }

  ngOnInit() {
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
        value: this.newMusicpiece.text,
        viewportMargin: Infinity,
        tabindex: 2
      }
    )

    editor.focus()

    // Update the model on every change
    CodeMirror.on(
      editor.getDoc(),
      'change',
      (instance, change) => this.newMusicpiece.text = editor.getValue()
    )
  }



  public createpiece(MusicPieceForm: NgForm): void {

    this.mpService.createMusicpiece(this.newMusicpiece)
      .subscribe(response => {
          this.router.navigate(['/lib/musicpiece/detail/' + response.id]);
        }
      );
  }

  getResult(){
    if(this.newMusicpiece.typeofpiece == "akkoord"){
      this.getChord();
    }else{
      this.getSheet()
    }

  }


  onmusicfilechange(event){

  }
  onaudiofilechange(event){

  }

  getSheet(){

  }

  getChord(){
    const parser = new ChordSheetJS.ChordProParser();
    const song = parser.parse(this.newMusicpiece.text);
    const formatter = new ChordSheetJS.HtmlTableFormatter();
    return formatter.format(song);
  }


  changetypeofmusicpiece(t: string) {
    this.newMusicpiece.typeofpiece = t;

  }
}
