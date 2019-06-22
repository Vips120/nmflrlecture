import {Component} from '@angular/core';
@Component({
    selector: 'app-parent',
    template:`
    <div class="container">
     <div class="row">
           <div class="col-md-8">
            <h2>Parent:</h2>
            <p *ngIf="addusername">{{addusername}}</p>
            <app-child [userEmail]="addEmail"
            (name)="AddUser($event)"
            ></app-child>
           </div>
     </div>
    </div>
    `
})

export class ParentComponent {
  addEmail:string='vs@gmail.com';
  addusername:string;
  constructor(){}
  AddUser(item) {
      this.addusername = item;
      console.log(item);
  }
}