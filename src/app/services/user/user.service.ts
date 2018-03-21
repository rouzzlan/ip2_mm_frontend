import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {User} from "../../model/user";
import {Role} from "../../model/role";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs/observable/of";

@Injectable()
export class UserService {
  private path = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) {
  }

  // region User calls
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.path + '/getusers');
  }

  public getUser(userEmail: string): Observable<User> {
    return this.http.get<User>(this.path + '/getusers/' + userEmail);
  }

  public getStudents(): Observable<String[]> {
    return this.http.get<String[]>(this.path + '/getstudents');
  }

  public getTeachers(): Observable<String[]> {
    return this.http.get<String[]>(this.path + '/getteachers');
  }

  public createUser(userToCreate: User): Observable<User> {
    return this.http.post<User>(this.path + '/adduser', userToCreate);
  }

  public editUser(userToEdit: User): Observable<User> {
    return this.http.put<User>(this.path + '/edituser', userToEdit);
  }

  // endregion

  // region Role calls
  public getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.path + '/getRoles');
  }

  // endregion

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
