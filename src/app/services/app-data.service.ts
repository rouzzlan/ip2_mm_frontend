import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {applySourceSpanToExpressionIfNeeded} from "@angular/compiler/src/output/output_ast";

@Injectable()
export class AppDataService {
  constructor(private http: AuthHttp) {
  }

  getRoles() {
    console.log(this.http.tokenStream)
    return this.http.get('http://localhost:8080/getroles').map(res => res.json());
  }

  getUsers() {
    console.log(this.http.tokenStream)
    return this.http.get('http://localhost:8080/getusers').map(res => res.json());
  }
}
