import { Component, OnInit } from '@angular/core';
import { DataSaveService } from '../data-save.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student = {
    name: '',
    tel: '',
    school : 'SBSM',
    subjects :['Maths'],
    class: 'IX'
  };
  constructor(private dataSaveService: DataSaveService, private router: Router) { }

  ngOnInit() {
    
  }
  addStudent(){
    console.log(this.student);
    this.dataSaveService.addStudent(this.student).subscribe((data) => {
      this.router.navigateByUrl('/#/class-pick');
    });
  }

}
