import { Component, OnInit } from '@angular/core';
import {LessonType} from '../../../../model/lessontype';
import {LessonService} from '../../../../services/lesson/lesson.service';
import {Lesson} from '../../../../model/lesson';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit {
  newLesson: Lesson = {
    id: 0,
    date: 'geen informatie',
    state: 'geen informatie',
    time: 0,
    seriesOfLessons: null,
    playlist: null,
    price: 0,
    lessonType: {
      name: 'geen informatie',
      description: 'geen informatie',
      id: 0,
      instrument: 'geen informatie',
      price: 0
    }
  };
  lessonTypes: LessonType[];

  constructor(private lessonService: LessonService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.lessonService.getLesson(+params['id']).subscribe(lesson => {
        this.newLesson = lesson;
      });
    });
    this.lessonService.getLessonTypes().subscribe(types => this.lessonTypes = types);
  }

  public updateLesson(lessonForm: NgForm): void {
    this.lessonService.updateLesson(this.newLesson, this.newLesson.id).subscribe(result => {
      lessonForm.reset();
      this.newLesson = new Lesson();
    });
  }
}
