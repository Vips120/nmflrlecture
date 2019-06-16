import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CourseComponent} from './courses.component';
import {CourseDetails} from './courseDetails';
import {propertyComponent} from './property.compoent';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    propertyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CourseDetails],
  bootstrap: [AppComponent]
})
export class AppModule { }
