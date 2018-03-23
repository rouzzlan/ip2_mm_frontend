import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MusicpieceService} from "../../../services/admin/musicpiece.service";
import {MusicPiece} from "../../../model/musicpiece";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-musicpieces',
  templateUrl: './musicpieces.component.html',
  styleUrls: ['./musicpieces.component.css']
})
export class MusicpiecesComponent implements OnInit {
  form: FormGroup;
  loading = false;
  succes: Boolean;
  response = '';

  @ViewChild('fileInput')
  fileInput: ElementRef;

  ngOnInit() {
  }

  constructor(private fb: FormBuilder, private service: MusicpieceService) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      artist: ['', Validators.required],
      language: ['', Validators.required],
      file: null
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('file').setValue(file);
    }
  }

  private prepareSave(): any {
    // {"title":"Test Music piece","artist":"Test2","language":"English","topic":null}
    const musicPiece: MusicPiece = new MusicPiece();
    musicPiece.title = this.form.get('title').value;
    musicPiece.artist = this.form.get('artist').value;
    musicPiece.language = this.form.get('language').value;
    const input = new FormData();
    const jsonbody: string = JSON.stringify(musicPiece);
    input.append('musicpiece_info', jsonbody);
    const file: File = this.form.get('file').value;
    input.append('music_file', file, file.name);
    return input;
  }

  onSubmit() {
    this.loading = true;
    const data: FormData = this.prepareSave();
    this.service.createMusicPiece(data)
      .subscribe(
         (res) => {
           console.log(res.status);
            if(res.status === 201) {
              this.succes = true;
              this.loading = false;
              this.response = "File succesvol toegevoegd";
            } else {
              this.response = res.status + ": " + res.statusText;
            }
        },
        (err:HttpErrorResponse) => {
          this.succes = false;
          this.loading = false;
          // if (err.status === 409) {
          //   this.response = "gepaste foutmelding"
          // } else {
            this.response = err.status + ": " + err.statusText;
          //}
        });

  }

  clearFile() {
    this.form.get('file').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

}

