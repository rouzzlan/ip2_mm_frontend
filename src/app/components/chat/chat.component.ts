import { Component, OnInit } from '@angular/core';
import '../../../assets/chat/ext/sockjs-0.3.4.js';
import '../../../assets/chat/ext/stomp.js';
import '../../../assets/chat/ext/jquery-2.1.4.js';
import '../../../assets/chat/index.js';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
