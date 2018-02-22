import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../../model/user';
import 'rxjs/add/operator/map';
import {of} from 'rxjs/observable/of';
import {Role} from '../../model/role';


@Injectable()
export class RestService {
  private path = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) {
  }

  // region User calls
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.path + '/getusersJson');
  }

  public getUser(userEmail: string): Observable<User> {
    return this.http.get<User>(this.path + '/getusersJson/' + userEmail);
  }

  public getStudents(): Observable<User[]> {
    return this.http.get<User[]>(this.path + '/getUsersJson');
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
    return this.http.get<Role[]>(this.path + '/getrolesJson');
  }

  // endregion

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}


// import {Component, OnInit} from '@angular/core';
// import {HttpClient, HttpErrorResponse} from '@angular/common/http';
// import 'rxjs/add/operator/map';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   title = 'app';
//
//   // result = '';
//
//   constructor(private http: HttpClient) {
//   }
//
//   ngOnInit(): void {
//     // get all
//     this.http.get('http://jsonplaceholder.typicode.com/posts')
//       .subscribe(data => {
//           console.log(data);
//         },
//         (err: HttpErrorResponse) => {
//           if (err.error instanceof Error) {
//             console.log('Client-side error occured.');
//           } else {
//             console.log('Server-side error occured.');
//           }
//         });
//
//     // get one
//     this.http.get('http://jsonplaceholder.typicode.com/posts/1')
//       .subscribe(
//         data => {
//           console.log(data);
//         },
//         (err: HttpErrorResponse) => {
//           if (err.error instanceof Error) {
//             console.log('Client-side error occured');
//           } else {
//             console.log('Server-side error occured');
//           }
//         }
//       );
//
//     // Sending
//     const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
//       title: 'foo',
//       body: 'bar',
//       userId: 1
//     })
//       .subscribe(
//         res => {
//           console.log(res);
//         },
//         err => {
//           console.log('Error occured: ' + err);
//         }
//       );
//
//     // Delete
//     const del = this.http.delete('http://jsonplaceholder.typicode.com/posts/1');
//
//     // Update
//     const upd = this.http.put('http://jsonplaceholder.typicode.com/posts/1', {
//       id: 1,
//       title: 'Winnie',
//       body: 'Pooh',
//       userId: 1
//     })
//       .subscribe(
//         res => {
//           console.log(res);
//         },
//         err => {
//           console.log('Error occured: ' + err);
//         }
//       );
//   }
// }

