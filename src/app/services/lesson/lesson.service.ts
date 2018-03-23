import { Injectable } from '@angular/core';
import {LessonType} from '../../model/lessontype';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Lesson} from '../../model/lesson';

@Injectable()
export class LessonService {
  private baseUrl = 'https://ip2-mm-backend.herokuapp.com/lesson';

  constructor(private http: HttpClient) { }

  public getLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.baseUrl);
  }

  public getLesson(id: number): Observable<Lesson> {
    let params = new HttpParams();
    params = params.append('lessonid', id.toString());

    return this.http.get<Lesson>(this.baseUrl + '/get', { params: params });
  }

  addStudentToLesson(selectedStudent: string, id: number) {
    let params = new HttpParams();
    params = params.append('email', selectedStudent);
    params = params.append('role', 'leerling');
    params = params.append('lessonid', id.toString());

    this.http.post(this.baseUrl + '/student/add', null, { params: params });
  }

  public getMyLessons(email: string): Observable<Lesson[]> {
    let params = new HttpParams();
    params = params.append('email', email);

    return this.http.get<Lesson[]>(this.baseUrl + '/mine', {params:params});
  }

  public addLesson(lesson: Lesson): Observable<Lesson> {
    return this.http.post<Lesson>(this.baseUrl + '/add', lesson);
  }

  public updateLesson(lesson: Lesson, id: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id.toString());

    return this.http.put(this.baseUrl + '/update', lesson, { params: params });
  }

  public deleteLesson(id: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id.toString());

    return this.http.delete(this.baseUrl + '/delete', { params: params });
  }

  public getLessonTypes(): Observable<LessonType[]> {
    return this.http.get<LessonType[]>(this.baseUrl + '/types');
  }

  public addLessonTypes(type: LessonType): void {
    this.http.post<LessonType>(this.baseUrl + '/types/add', type);
  }

  public updateLessonTypes(type: LessonType, id: number): void {
    let params = new HttpParams();
    params = params.append('id', id.toString());

    this.http.put<LessonType>(this.baseUrl + '/types/update', type, { params: params });
  }

  public deleteLessonTypes(id: number): void {
    let params = new HttpParams();
    params = params.append('id', id.toString());

    this.http.delete(this.baseUrl + '/types/delete', { params: params });
  }
}
