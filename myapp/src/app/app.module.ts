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
import {FormsModule} from '@angular/forms';
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
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CourseDetails],
  bootstrap: [AppComponent]
})
export class AppModule { }
