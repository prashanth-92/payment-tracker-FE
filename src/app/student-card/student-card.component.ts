import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';
import { DataSaveService } from '../data-save.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {
  students: any;
  payments: any;
  addPaymentCardRevealMode: boolean = false;
  constructor(private dataFetchService: DataFetchService,
    private dataSaveService: DataSaveService) { }

  ngOnInit() {
    this.getStudentDetails();
  }
  getStudentDetails(){
    this.dataFetchService.getStudents().subscribe((data) => this.students = data);
  }
  savePayment(student){
    this.dataSaveService.addPayment(student).subscribe(() => console.log("done"));
  }
  addCardRevalMode(){
    this.addPaymentCardRevealMode = true;
  }
  viewCardRevalMode(){
    this.addPaymentCardRevealMode = false;
    this.getPayments();
  }
  getPayments(){
    this.dataFetchService.getPayments().subscribe((data: Payments) => this.payments = data.payments);
  }
}
export class Payments{
  studentId: String;
  payments: any;
}
