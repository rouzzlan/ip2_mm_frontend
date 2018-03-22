import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Lesson} from '../../../../model/lesson';
import {LessonService} from '../../../../services/lesson/lesson.service';

@Component({
  selector: 'app-delete-lesson',
  templateUrl: './delete-lesson.component.html',
  styleUrls: ['./delete-lesson.component.css']
})
export class DeleteLessonComponent implements OnInit {
  lesson = new Lesson();

  constructor(private lessonService: LessonService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.lessonService.getLesson(+params['id'])
        .subscribe(lesson => this.lesson = lesson);
    });
  }

  public deleteLesson(): void {
    this.lessonService.deleteLesson(this.lesson.id)
      .subscribe(() => {
        },
        () => this.router.navigate(['/lesson'])
      );
  }
}
