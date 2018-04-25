import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataFetchService {

  private studentsUrl = './assets/students.json';
  private paymentsUrl = './assets/payments.json';
  
  constructor(private http: HttpClient) { }
  
  getStudents() {
    return this.http.get(this.studentsUrl);
  }
  getPayments() {
    return this.http.get(this.paymentsUrl);
  }
}
