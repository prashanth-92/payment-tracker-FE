import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { ClassPickerComponent } from './class-picker/class-picker.component';
import { MaterialModule } from './material/material.module';
import { StudentListComponent } from './student-list/student-list.component';
import { DataFetchService } from './data-fetch.service'
import { HttpClientModule, HttpClient } from '@angular/common/http';

const AppRoutes: Routes = [
  { 
    path: '', redirectTo: 'class-pick', pathMatch: 'full'
  },
  {
    path: 'class-pick', component: ClassPickerComponent
  },
  {
    path: 'student-list/:class', component: StudentListComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ClassPickerComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports:[
    RouterModule
  ],
  providers: [ HttpClient, DataFetchService ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
