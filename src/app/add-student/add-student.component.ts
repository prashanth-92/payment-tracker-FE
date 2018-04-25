import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jQuery: any;

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student = {
    name: '',
    tel: '',
    school : '',
    subjects :[]
  };
  constructor() { }

  ngOnInit() {
    
  }
  addStudent(){
    console.log(this.student);
  }

}
