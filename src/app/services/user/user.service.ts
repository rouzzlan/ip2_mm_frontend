import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {User} from "../../model/user";
import {Role} from "../../model/role";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class UserService {
  private path = 'http://127.0.0.1:8080/user';

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.path + '/get');
  }

  public getUser(userEmail: string): Observable<User> {
    return this.http.get<User>(this.path + '/email/' + userEmail);
  }

  public getStudents(): Observable<String[]> {
    return this.http.get<String[]>(this.path + '/getstudents');
  }

  public getTeachers(): Observable<String[]> {
    return this.http.get<String[]>(this.path + '/getteachers');
  }

  public createUser(userToCreate: User): Observable<User> {
    return this.http.post<User>(this.path + '/add', userToCreate);
  }

  public editUser(userToEdit: User): Observable<User> {
    return this.http.put<User>(this.path + '/update', userToEdit);
  }

  public deleteUser(userToDelete: User) {
    let params = new HttpParams();
    params.set('email', userToDelete.email);
    return this.http.delete<User>(this.path + '/delete', {params});
  }

  //ROLES
  public getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.path + '/getroles');
  }
}
