import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-taskone',
    template: `
    <div class="container">
      <div class="row">
       <div class="col-md-6">
       <ul *ngFor="let user of users">
       <li>{{user.id}}</li>
       <li>{{user.name}}</li>
       </ul>
<hr/>
<button type="button" class="btn btn-danger btn-md"
 (click)="AddUser()"
>Click Me</button>   
       </div>
      </div>
    </div>
   
    `
})

export class TaskOneComponent {
    newUser = {
        id:5,
        name: 'vs'
    };
   @Input() public users:any[];
   @Output() public currentUser = new EventEmitter();
    constructor() {}
    AddUser(){
this.currentUser.emit(this.newUser);
    }
}