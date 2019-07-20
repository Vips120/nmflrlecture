import { Component, OnInit } from '@angular/core';
import {UserpostsServices} from '../shared/services/userposts.services';
import { Iposts } from '../shared/model/posts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  posts:Iposts;
  constructor(private userpostsServices: UserpostsServices){}
items = [{
  id:1,
  name: 'about2'
},
{
  id:2,
  name: 'about3'
},
{
  id:3,
  name: 'about4'
}
];

  ngOnInit() {
    this.userpostsServices
    .Postsdetails().
    subscribe(data => {
      this.posts = data;
      console.log(data);
    })
  }

}
