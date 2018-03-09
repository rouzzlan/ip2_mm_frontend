import {Instrument} from './instrument';

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
