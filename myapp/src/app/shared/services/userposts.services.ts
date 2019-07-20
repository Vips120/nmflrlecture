import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Iposts} from '../model/posts';
import { Observable } from 'rxjs';
import {} from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class UserpostsServices {
    private postsurl:string = 'https://jsonplaceholder.typicode.com/posts';
    constructor(private http: HttpClient){}
    Postsdetails():Observable<Iposts>{
return this.http.get<Iposts>(this.postsurl);
    }
}