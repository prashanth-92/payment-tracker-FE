import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { ClassPickerComponent } from './class-picker/class-picker.component';
import { MaterialModule } from './material/material.module';
import { StudentListComponent } from './student-list/student-list.component';
import { DataFetchService } from './data-fetch.service'
import { DataSaveService } from './data-save.service'


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StudentCardComponent } from './student-card/student-card.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { AddStudentComponent } from './add-student/add-student.component';

const AppRoutes: Routes = [
  { 
    path: '', redirectTo: 'class-pick', pathMatch: 'full'
  },
  {
    path: 'class-pick', component: ClassPickerComponent
  },
  {
    path: 'student-list/:class', component: StudentListComponent
  },
  {
    path: 'add-student', component: AddStudentComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ClassPickerComponent,
    StudentListComponent,
    StudentCardComponent,
    StudentTableComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MaterializeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports:[
    RouterModule
  ],
  providers: [ HttpClient, DataFetchService, DataSaveService ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
