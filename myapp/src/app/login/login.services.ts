import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Ilogin} from './model/login';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({providedIn:'root'})
export class LoginServices {
    private userLiginApi = 'http://mobile.test.acorsociety.com/ideators/api/users/userloginasync';
    public headers:HttpHeaders
    constructor(private http:HttpClient){
        this.headers = new HttpHeaders({'Content-Type': 'application/json'})
    }
    userAuth(item:Ilogin):Observable<Ilogin>{
        return this.http.post<Ilogin>(this.userLiginApi, JSON.stringify(item),{headers:this.headers})
         .pipe(map((data) => {
             if(data && data.UserIdentity){
               localStorage.setItem('currentUser', JSON.stringify(data))  
             }
             return data;
         }))
        ;
    };
}