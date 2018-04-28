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
    this.dataSaveService.addPayment(student).subscribe(() => {
      window.location.reload();
    });
  }
  addCardRevalMode(){
    this.addPaymentCardRevealMode = true;
  }
  viewCardRevalMode(studentId){
    this.addPaymentCardRevealMode = false;
    this.getPayments(studentId);
  }
  getPayments(studentId){
    this.dataFetchService.getPayments(studentId).subscribe((data) => this.payments = data);
  }
}
export class Payments{
  studentId: String;
  payments: any;
}
