import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataFetchService {

  /*private studentsUrl = './assets/students.json';
  private paymentsUrl = './assets/payments.json';
*/
  private studentServiceUrl = "/api/student";
  private paymentServiceUrl = "/api/payment";
  
  constructor(private http: HttpClient) { }
  
  getStudents() {
    return this.http.get(this.studentServiceUrl);
  }
  getPayments(studentId) {
    return this.http.get(this.paymentServiceUrl+"/"+studentId);
  }
}
