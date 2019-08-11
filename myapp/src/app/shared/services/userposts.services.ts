import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Iposts} from '../model/posts';
import { Observable } from 'rxjs';
import {} from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class UserpostsServices {
    private postsurl:string = 'https://jsonplaceholder.typicode.com/posts';
    private userRegister:string = 'http://mobile.test.acorsociety.com/ideators/api/users/userregistrationasync';
    private Headers:HttpHeaders;
    constructor(private http: HttpClient){
        this.Headers = new HttpHeaders({'Content-Type': 'application/json'})
    }
    Postsdetails():Observable<Iposts>{
return this.http.get<Iposts>(this.postsurl);
    };

    UserRegister(item){
        return this.http.post(this.userRegister, JSON.stringify(item), {headers:this.Headers} )
    };

    
}