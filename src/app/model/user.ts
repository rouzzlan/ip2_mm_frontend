import {Instrument} from './instrument';
import {Role} from "./role";

export class User {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  enabled: boolean;
  instruments: Instrument[];
  roles: string[];
}
