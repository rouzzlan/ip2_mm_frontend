import {Playlist} from './playlist';
import {LessonType} from './lessontype';
import {SeriesOfLessons} from './series-of-lessons';

export class Lesson {
  id: number;
  time: number;
  price: number;
  state: string;
  playlist: Playlist;
  lessontype: LessonType;
  seriesOfLessons: SeriesOfLessons;
  date: string;
}
