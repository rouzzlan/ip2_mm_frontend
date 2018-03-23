import {Component, Input, OnInit} from '@angular/core';
import {musicpiece} from "../../../../model/musicpiece";
import {MusicpieceService} from "../../../../services/musicpiece/musicpiece.service";
import {ActivatedRoute, Router} from "@angular/router";
import ChordSheetJS from 'chordsheetjs';
import * as CodeMirror from 'codemirror'
import 'codemirror/mode/markdown/markdown'
import {NgForm} from "@angular/forms";
import {User} from "../../../../model/user";
@Component({
  selector: 'app-edit-musicpiece',
  templateUrl: './edit-musicpiece.component.html',
  styleUrls: ['./edit-musicpiece.component.css']
})
export class EditMusicpieceComponent implements OnInit {
  @Input() user: User;

  musicpiece: musicpiece = new musicpiece();
  types = ["akkoordschema", "pianoakkoorden", "gitaarakkoorden", "andere"];
  difficulty = ["easy", "intermediate", "advanced", "andere"];
  typeofmusicpiece = ["akkoord", "muziekpartituren"];
  constructor(private mpService: MusicpieceService, private route: ActivatedRoute) {
    this.musicpiece.user = this.user.id;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mpService.getMusicpiece(+params['id'], +params['user'])
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

}
