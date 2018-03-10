import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';

@Injectable()
export class AppDataService {
  constructor(private http: AuthHttp) {
  }

  getRoles() {
    console.log(this.http.tokenStream);
    return this.http.get('http://localhost:8080/getroles').map(res => res.json());
  }

  getUsers() {
    console.log(this.http.tokenStream);
    return this.http.get('http://localhost:8080/getusers').map(res => res.json());
  }
}
