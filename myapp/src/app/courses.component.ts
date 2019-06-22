import {Component} from '@angular/core';
import {CourseDetails} from './courseDetails';
@Component({
    selector: 'app-courses',
    template:`
    <div class="container">
    <h3>{{userName}}</h3>
    <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
    </ul>
    </div>
    `,
    styleUrls:['./course.component.css']
})

export class CourseComponent {
    userName:string = 'Vipul';
    courses:Array<string>;
    constructor(private courseDetails: CourseDetails){
   // let courseDetails = new CourseDetails();
    this.courses = courseDetails.courses();
    }
   // courses:Array<string> = ["Angular", "javascript", "typescript", "nodejs"];
}