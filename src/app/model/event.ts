import {Band} from './band';
import {Timestamp} from 'rxjs/operators/timestamp';

export class Event {
  id: number;
  title: string;
  start: string;
  place: string;
  band: string;
  date: Date;
}
