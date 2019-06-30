import {Component} from '@angular/core';
import {User} from '../shared/model/user';
@Component({
    selector: 'app-template',
    templateUrl:'./template.component.html'
})

export class TemplateComponent {
        Model = new User();
    constructor(){}
    Save(item:User){
        
        console.log(item);
    }
}