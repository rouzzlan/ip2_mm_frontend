import {Component, OnInit} from '@angular/core';
import {AlertServiceComponent} from '../../../services/alert.service/alert.service.component';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  message: any;

  constructor(private alertService: AlertServiceComponent) {
  }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

}
