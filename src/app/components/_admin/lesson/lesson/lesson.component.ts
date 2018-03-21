import { Component, OnInit } from '@angular/core';
import {Lesson} from '../../../../model/lesson';
import {LessonService} from '../../../../services/lesson/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  lessons: Lesson[];

  constructor(private lessonservice: LessonService) { }

  ngOnInit() {
    this.lessonservice.getLessons().subscribe(lessons  => {
      this.lessons = lessons;
      console.log(this.lessons);
    });
  }

}
