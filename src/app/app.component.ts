import {Component, OnInit} from '@angular/core';
import {Post} from './model/post';
import {TestService} from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  posts: Post[] = null;

  constructor( private testService: TestService ) {
  }

  ngOnInit(): void {
    this.testService.getPoststs().subscribe(posts => this.posts = posts);
  }
}
