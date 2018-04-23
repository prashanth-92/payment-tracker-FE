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
    this.classes.push("9");
    this.classes.push("10");
    this.classes.push("11");
    this.classes.push("12");
  }

  goTo(classVal){
    //console.log(classVal);
    this.router.navigateByUrl("/student-list/"+classVal);
  }

}
