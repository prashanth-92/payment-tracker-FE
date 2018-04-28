import { Component, OnInit } from '@angular/core';
import { DataSaveService } from '../data-save.service'

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
  constructor(private dataSaveService: DataSaveService) { }

  ngOnInit() {
    
  }
  addStudent(){
    console.log(this.student);
    this.dataSaveService.addStudent(this.student).subscribe((data) => console.log(data));
  }

}
