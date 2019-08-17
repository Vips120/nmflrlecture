import {Component, OnInit} from '@angular/core';
import {Validators,FormGroup,FormBuilder} from '@angular/forms';
import {Ilogin} from './model/login';
import { LoginServices } from './login.services';
import { Router } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl:'./login.component.html'
})

export class LoginComponent implements OnInit {
public userLogin: FormGroup;
public showError;
    constructor(private fb: FormBuilder, private loginServices: LoginServices,private router: Router){}
    ngOnInit(){
this.userLogin = this.fb.group({
    'UserLogin': this.fb.group({
        'UserName':['', Validators.required],
        'Password': ['', [Validators.required]]
    })

})
    };
   async storeUserLogin(data:Ilogin){
        console.log(data);
     await this.loginServices
      .userAuth(data)
      .subscribe(item => {
          try {
            console.log(item);
            if(item.FirstName){
              alert('Login successful');
              this.router.navigateByUrl('/home');
            } else {
                this.showError = item.Error;
            }
  
        }
     catch(error){
        error => {
            this.showError = error.Error;
            console.log(error.Error)
        }
     }
    }
      ) 
    }
}