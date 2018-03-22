import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Lesson} from '../../../../model/lesson';
import {LessonService} from '../../../../services/lesson/lesson.service';

@Component({
  selector: 'app-details-lesson',
  templateUrl: './details-lesson.component.html',
  styleUrls: ['./details-lesson.component.css']
})
export class DetailsLessonComponent implements OnInit {
  lesson = new Lesson();

  constructor(private lessonService: LessonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.lessonService.getLesson(+params['id'])
        .subscribe(lesson => this.lesson = lesson);
    });
  }
}
