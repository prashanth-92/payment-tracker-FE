import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';
import { DataSaveService } from '../data-save.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit { 
  isCardView : boolean = true; 
  students: any;
  constructor(private dataFetchService: DataFetchService,
    private dataSaveService: DataSaveService, private router: Router) { }
  
  ngOnInit() { 
     //this.getStudentDetails();
  }
  getStudentDetails(){
    //this.dataFetchService.getStudents().subscribe((data) => this.students = data);
  }
  savePayment(student){
    this.dataSaveService.addPayment(student).subscribe(() => console.log("done"));
  }
  addStudent(){
    this.router.navigateByUrl('/add-student');
  }
}