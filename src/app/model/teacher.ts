import {Instrument} from './instrument';

export class Teacher {
  id: number;
  username: String;
  firstname: String;
  lastname: String;
  birthDate: Date;
  address: String;
  houseNumber: number;
  zipcode: number;
  city: number;
  country: String;
  email: String;
  password: String;
  instruments: Instrument[];
}
