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
    date: '',
    state: '',
    time: 0,
    price: 0,
    lessonType: ''
  };
  lessonTypes: LessonType[];
  lessonDate: string;
  lessonHour: string;

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
    let tmpString = this.lessonDate.split('/').reverse().join('-').concat('T' + this.lessonHour + ':00.000');
    this.newLesson.date = tmpString;

    this.lessonService.updateLesson(this.newLesson, this.newLesson.id).subscribe(result => {
      lessonForm.reset();
      this.newLesson = new Lesson();
    });
  }
}
