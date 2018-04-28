import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataSaveService {

  private studentServiceUrl = "/api/student";
  private paymentServiceUrl = "/api/payment";
  constructor(private http: HttpClient) { }
  
  addPayment(data){
    return this.http.post(this.paymentServiceUrl, data);
  }
  addStudent(data){
    return this.http.post(this.studentServiceUrl, data);
  }
}
