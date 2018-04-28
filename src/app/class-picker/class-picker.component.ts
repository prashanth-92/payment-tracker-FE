import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-class-picker',
  templateUrl: './class-picker.component.html',
  styleUrls: ['./class-picker.component.css']
})
export class ClassPickerComponent implements OnInit {
  classes : Array<any> = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.classes.push("IX");
    this.classes.push("X");
    this.classes.push("XI");
    this.classes.push("XII");
  }

  goTo(classVal){
    this.router.navigateByUrl("/student-list/"+classVal);
  }

}
