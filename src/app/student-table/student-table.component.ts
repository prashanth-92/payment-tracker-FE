import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';
import { DataSaveService } from '../data-save.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  students: any;
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
}
