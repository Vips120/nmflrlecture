import {Component} from '@angular/core';
@Component({
    selector: 'app-task',
    template: `
    
    <app-taskone [users]="users"
    (currentUser)="getUser($event)"
    ></app-taskone>
    
    `
})

export class TaskComponent {
    users:any[] = [{
        id:1,
        name: 'john'
    },
{
  id:2,
  name: 'mak'  
},
  {
      id:3,
      name: 'garry'
  },
  {
      id:4,
      name: 'emma'
  }
];
    constructor() {}
    getUser(data){
        this.users.push(data);
        console.log(data);
    }
}