import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataSaveService {

  private serviceUrl = "";
  constructor(private http: HttpClient) { }
  
  addPayment(data){
    return this.http.post(this.serviceUrl, data);
  }
}
