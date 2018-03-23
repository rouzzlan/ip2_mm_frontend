import {Component, OnInit} from '@angular/core';
import {Lesson} from '../../../../model/lesson';
import {LessonType} from '../../../../model/lessontype';
import {LessonService} from '../../../../services/lesson/lesson.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.css']
})
export class CreateLessonComponent implements OnInit {
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

  constructor(private lessonService: LessonService) {
  }

  ngOnInit() {
    this.lessonService.getLessonTypes().subscribe(types => this.lessonTypes = types);
  }

  public createLesson(lessonForm: NgForm): void {
    let tmpString = this.lessonDate.split('/').reverse().join('-').concat('T' + this.lessonHour + ':00.000');
    this.newLesson.date = tmpString;

    this.lessonService.addLesson(this.newLesson).subscribe(result => {
      lessonForm.reset();
      this.newLesson = new Lesson();
    });
  }
}
