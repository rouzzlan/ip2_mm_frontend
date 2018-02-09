import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from '../model/post';

@Injectable()
export class TestService {
  private basepath: string = 'http://jsonplaceholder.typicode.com/';

  constructor( private http: HttpClient ) {
  }

  public getPoststs(): Observable<Post[]>{
    return this.http.get<Post[]>(this.basepath + 'posts');
  }

}
