import {Component, OnInit} from '@angular/core';
import {Validators,FormGroup, FormBuilder} from '@angular/forms';
import {CourseRegularExpression} from './regx';
import {IcourseUser} from '../shared/model/courseUser';
@Component({
    selector: 'app-courseDetails',
    templateUrl: './courseDetails.component.html'
})

export class CourseDetailsComponent implements OnInit {
    userForm: FormGroup;
    submitted:boolean = false;
    constructor(private fb: FormBuilder){}
    ngOnInit(){
      this.userForm =  this.fb.group({
           'username': ['',[Validators.required,Validators.minLength(5), CourseRegularExpression.Username]],
           UserLogin: this.fb.group({
            'password': ['', Validators.required],
            'email': ['', Validators.required]
           })

      });
    }
    Save(data: IcourseUser){
        this.submitted = true;
        if(!this.userForm.valid){return;}
        console.log(data);
    }
}