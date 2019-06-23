import {Component} from '@angular/core';
@Component({
    selector: 'app-property1',
    template: `
    <h2 *ngIf="username.length >= 1; else error">
     {{username}}
    </h2>
    <ng-template
    #error
    >
    <h2> Not Found any data</h2>
    </ng-template>
    <ul
     *ngFor="let course of courses; let i=index"
    >
   {{i+1}} {{course}}
    </ul>
    <button type="button" class="btn btn-danger btn-md"
    (click)="matchSection='home'"
    >Home</button>
    <button type="button" class="btn btn-info btn-md"
    (click)="matchSection='about'"
    >About</button>
    <div 
     *ngIf="matchSection"
    [ngSwitch]="matchSection">
    <h2 *ngSwitchCase="'home'">This 
    is home section</h2>
    <h2 *ngSwitchCase="'about'">This is About section</h2>
    <h2 *ngSwitchDefault>Not Found</h2>
    </div>

    <div class="panel panel-danger">
    <div class="panel-heading">
      <h3 class="panel-title">
      <ng-content select=".header"></ng-content>
      </h3>
    </div>
    <div class="panel-body">
    <ng-content select=".body"></ng-content>
    </div>
</div>

    `
})
export class PropertyComponent {
      username = 'vs';
       matchSection;
      courses = ['angular', 'javascript', 'typescript']
    constructor(){}
}