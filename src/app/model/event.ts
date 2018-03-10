import {Band} from './band';
import {Timestamp} from 'rxjs/operators/timestamp';

export class Event {
  id: number;
  name: string;
  dateTime: string;
  // time: Timestamp<string>;
  place: string;
  band: string;
}
