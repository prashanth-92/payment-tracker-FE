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
  
  getStudents(classId) {
    return this.http.get(this.studentServiceUrl+"/"+classId);
  }
  getPayments(studentId) {
    return this.http.get(this.paymentServiceUrl+"/"+studentId);
  }
}
