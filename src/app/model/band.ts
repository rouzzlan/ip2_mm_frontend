import {User} from './user';

export class Band {
  id: number;
  name: String;
  teacher: User[];
  students: User[];
  nameStudent: String;
}
