import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CourseComponent} from './courses.component';
import {CourseDetails} from './courseDetails';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CourseDetails],
  bootstrap: [AppComponent]
})
export class AppModule { }
