import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Student } from './student';

@Injectable()
export class DataFetchService {

  //private serviceUrl = 'https://jsonplaceholder.typicode.com/users';
  private serviceUrl = './assets/students.json';
  
  constructor(private http: HttpClient) { }
  
  getStudentDetails(): Observable<Student[]> {
    return this.http.get<Student[]>(this.serviceUrl);
  }
}
