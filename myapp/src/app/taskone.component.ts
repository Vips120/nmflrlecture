import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-taskone',
    template: `
    <div class="container">
      <div class="row">
      <div class="col-md-6">
        <div class="form-group">
        userId:<input type="text" name="userid" placeholder="enter your userid"
         class="form-control"
         #userid
        >
        </div>
      
        <div class="form-group">
        userId:<input type="text" name="username" placeholder="enter your username"
         class="form-control"
         #username
        >
        <hr/>
        <button type="button" class="btn btn-danger btn-md"
 (click)="AddUser(userid.value, username.value)"
>Click Me</button>   
        </div>
      </div>
       <div class="col-md-6">
       <ul *ngFor="let user of users">
       <li userDirect>{{user.id}}</li>
       <li userDirect>{{user.name}}</li>
       </ul>
<hr/>


       </div>
      </div>
    </div>

    <ul>
<li class="dropdown" userDirect >
              <a class="dropdown-toggle"data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
    </ul>
   
    `,
    styles: [`
    
    
    `]
})

export class TaskOneComponent {
    newUser = {
        id:5,
        name: 'vs'
    };
   @Input() public users:any[];
   @Output() public currentUser = new EventEmitter();
    constructor() {}
    AddUser(uid,uname){
this.currentUser.emit({id:uid, name:uname});
    }
}