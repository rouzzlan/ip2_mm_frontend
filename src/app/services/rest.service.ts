import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user';
import 'rxjs/add/operator/map';
import {of} from 'rxjs/observable/of';


@Injectable()
export class RestService {
  private path = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.path + '/getusersJson');
  }

  public createUser(userToCreate: User): Observable<User> {
    return this.http.post<User>(this.path, userToCreate);
  }

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

