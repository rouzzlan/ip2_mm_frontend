import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../../model/user';
import 'rxjs/add/operator/map';
import {of} from 'rxjs/observable/of';
import {Role} from '../../model/role';


@Injectable()
export class UserService {
  private path = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) {
  }

  // region User calls
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.path + '/getusers');
  }

//  public getUser(id: number): Observable<User> {
//    return this.http.get<User>(this.path + '/user/'+id);
//  }

  public getUser(email: string): Observable<User> {
    return this.http.get<User>(this.path + '/userByEmail/' + email);
  }

  public getStudents(): Observable<User[]> {
    return this.http.get<User[]>(this.path + '/getstudents');
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
    return this.http.get<Role[]>(this.path + '/getroles');
  }

  // endregion

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getTeachers() {
    return this.http.get<User[]>(this.path + '/getteachers')
  }
}
