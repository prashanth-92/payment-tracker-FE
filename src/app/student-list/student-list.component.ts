import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit { 
  isCardView : boolean = true; 
  students: any;
  dataSource = new StudentDataSource(this.dataFetchService);
  displayedColumns = ['id', 'name', 'school', 'contact-no', 'fees-paid', 'add-payment'];
  constructor(private dataFetchService: DataFetchService) { }
  
  ngOnInit() { 
    this.dataFetchService.getStudentDetails().subscribe((data) => this.students = data);
  }
}

export class StudentDataSource extends DataSource<any> {
  
  constructor(private dataFetchService: DataFetchService) {
    super();
  }
  connect(): Observable<Student[]> {
    return this.dataFetchService.getStudentDetails();
  }
  disconnect() {}
}