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
  lesson: Lesson = {
    id: 0,
    date: '',
    state: '',
    time: 0,
    price: 0,
    lessonType: ''
  };

  constructor(private lessonService: LessonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.lessonService.getLesson(+params['id'])
        .subscribe(lesson => this.lesson = lesson);
    });
    console.log(this.lesson.date);
  }
}
