import {Component} from '@angular/core';
@Component({
    selector: 'app-property',
    template:`
    <h3
     (click)="Action()"
    [style.color]="isActive ? 'red': 'green'">hello User</h3>
    <button type="button" class="btn btn-md"
    [class.btn-danger]="isActive"
    [class.btn-primary]="!isActive"
    >Click me!</button>
     <span class="glyphicon"
     [class.glyphicon-star-empty]="!isActive"
     [class.glyphicon-star]="isActive"
    ></span>

<button type="button" class="btn btn-danger btn-md"
(click)="choosePerson=male"
[disabled]="choosePerson== male"
>Male</button>
<button type="button" class="btn btn-primary btn-md"
(click)="choosePerson=female"
[disabled]="choosePerson== female"
>FeMale</button>
<div *ngIf="choosePerson">
<img src="{{choosePerson.imgUrl}}">
<h2>{{choosePerson.name}}</h2>

</div>

    `
})
export class propertyComponent {
    isActive:boolean = false;
    // imgUrl:string = '../assets/img/face1.jpg';
    public male = {
        name: 'john Doe',
        imgUrl: '../assets/img/face2.jpg'
    };

    public female = {
        name: 'emma doe',
        imgUrl: '../assets/img/face1.jpg'
    };
    choosePerson;
    constructor(){}
    Action(){
        this.isActive = !this.isActive;
    }
}