import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CourseComponent} from './courses.component';
import {CourseDetails} from './courseDetails';
import {propertyComponent} from './property.compoent';
import {HeartComponent} from './heart.component';
import {ParentComponent} from './parent.component';
import {ChildComponent} from './child.component';
import { TaskComponent } from './task.component';
import { TaskOneComponent } from './taskone.component';
import { PropertyComponent } from './property.component';
import {UserDirective} from './user.directive';
import { CustComponent } from './cust.component';
import { ContentPipe } from './content.pipes';
import { TemplateComponent } from './templateForm/template.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CourseDetailsComponent } from './reactiveForm/courseDetails.component';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {approutes} from './apps.routes';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    propertyComponent,
    HeartComponent,
    ParentComponent,
    ChildComponent,
    TaskComponent,
    TaskOneComponent,
    PropertyComponent,
    UserDirective,
    CustComponent,
    ContentPipe,
    TemplateComponent,
    CourseDetailsComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    About1Component,
    About2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [CourseDetails],
  bootstrap: [AppComponent]
})
export class AppModule { }
