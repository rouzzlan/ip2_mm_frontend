import {Instrument} from './instrument';
import {Role} from './role';

export class User {
  id: number;
  username: String;
  firstname: String;
  lastname: String;
  email: String;
  password: String;
  houseNumber: number;
  zipcode: number;
  city: number;
  country: String;
  instruments: Instrument[];
  roles: String[];
}
