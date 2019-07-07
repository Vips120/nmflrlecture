import {Component} from '@angular/core';
@Component({
    selector: 'app-cust',
    template: `
    <ul>
     <li>{{users.name | uppercase | lowercase}}</li>
     <li>{{users.rating | number:'2.2-2'}}</li>
     <li>{{users.ranking | number}}</li>
     <li>{{users.sal | currency: 'INR'}}</li>
     <li>{{users.date | date: 'MM/dd/yyyy'}}</li>
     <li>{{users | json}}</li>
    </ul>
    <p>{{heading | content: 33}}</p>
    <img src="{{imgUrl}}">
    `
})
export class CustComponent {
    users = {
        name: 'John Smith',
        rating: 4.6566,
        ranking:452225587878787,
        sal:45677554,
        date: new Date()
    };
    imgUrl='http://lorempixel.com/400/200/';
    heading = 'Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi, Gurgaon, Nagpur, Jaipur, Coimbatore, Chandigarh';

    constructor(){}
}