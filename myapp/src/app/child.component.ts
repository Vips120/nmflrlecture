import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
    selector: 'app-child',
    template:`
    <div class="container">
    <div class="row">
          <div class="col-md-8">
           <h2>Child:</h2>
           <h1>{{userEmail}}</h1>
           <hr/>
           <button type="button" class="btn btn-danger 
           btn-md"
            (click)="AddUsername()"
           >
            Click Me!
           </button>
          </div>
    </div>
   </div>
    
    `
})

export class ChildComponent {
  @Input()  public userEmail:string;
  public username:string = 'vipul';
  @Output() name = new EventEmitter();
   
    constructor(){}
    AddUsername() {
 this.name.emit(this.username);
    }
}