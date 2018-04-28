import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';
import { DataSaveService } from '../data-save.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {
  students: any;
  payments: any;
  classId: String;
  addPaymentCardRevealMode: boolean = false;
  constructor(private dataFetchService: DataFetchService,
    private dataSaveService: DataSaveService, private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.classId = routeParams.classId;
      this.getStudentDetails(routeParams.classId);
    });
    //this.getStudentDetails();
  }
  getStudentDetails(classId){
    this.dataFetchService.getStudents(classId).subscribe((data) => this.students = data);
  }
  savePayment(student){
    this.dataSaveService.addPayment(student).subscribe(() => {
      this.students = [];
      this.getStudentDetails(this.classId);
      //this.router.navigateByUrl("/#/student-list/"+this.classId);
      //window.location.reload();
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