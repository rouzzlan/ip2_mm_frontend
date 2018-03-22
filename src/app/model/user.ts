import {Instrument} from './instrument';

export class User {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  houseNumber: number;
  zipcode: number;
  city: number;
  country: string;
  instruments: Instrument[];
  roles: string[];
}
