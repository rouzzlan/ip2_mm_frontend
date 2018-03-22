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
    seriesOfLessons: null,
    playlist: null,
    price: 0,
    lessonType: {
      name: '',
      description: '',
      id: 0,
      instrument: '',
      price: 0
    }
  };
  lessonTypes: LessonType[];

  constructor(private lessonService: LessonService) {
  }

  ngOnInit() {
    this.lessonService.getLessonTypes().subscribe(types => this.lessonTypes = types);
  }

  public createLesson(lessonForm: NgForm): void {
    console.log('les aangemaakt');
    this.lessonService.addLesson(this.newLesson).subscribe(result => {
      lessonForm.reset();
      this.newLesson = new Lesson();
    });
  }
}
