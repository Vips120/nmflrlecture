import {Component, Input} from '@angular/core';
@Component({
    selector: 'app-heart',
    template:`
    <span
     class=" glyphicon glyphicon-heart"
    [class.glyphicon1]="isliked"
      (click)="heartLike()"
     >
    </span> {{totalCount}}
    `,
    styles: [`
    .glyphicon{
        font-size:30px;
        cursor:pointer;
    }
      .glyphicon1 {
          color:red;
      }
    `]
})

export class HeartComponent {
  @Input()  totalCount:number;
    isliked:boolean = false;
    constructor() {}
    heartLike() {
this.isliked = !this.isliked;
this.totalCount += this.isliked ? 1 : -1;
    }
}