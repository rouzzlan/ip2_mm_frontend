import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TestService {
  constructor(private http: HttpClient) {}

  async getRoles() {
    return await this.http.get('http://localhost:8080/user/getroles').toPromise();
  }

  async getUsers() {
    return await this.http.get('http://localhost:8080/user/get').toPromise();
  }

  async getLessonTypes() {
    return await this.http.get('http://localhost:8080/lesson/types').toPromise();
  }
}
