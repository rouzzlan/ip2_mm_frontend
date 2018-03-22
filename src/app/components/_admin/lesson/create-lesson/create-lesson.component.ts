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
  newLesson: Lesson = new Lesson();
  lessonTypes: LessonType[];

  constructor(private lessonService: LessonService) {
  }

  ngOnInit() {
    this.lessonService.getLessonTypes().subscribe(types => this.lessonTypes = types);
  }

  public createLesson(lessonForm: NgForm): void {
    this.newLesson.date.concat('00');
    this.lessonService.addLesson(this.newLesson).subscribe(result => {
      lessonForm.reset();
      this.newLesson = new Lesson();
    });
  }
}
