import {Instrument} from './instrument';
import {Role} from "./role";

export class User {
  id: number;
  username: String;
  firstname: String;
  lastname: String;
  email: String;
  password: String;
  enabled: boolean;
  instruments: Instrument[];
  roles: String[];
}
