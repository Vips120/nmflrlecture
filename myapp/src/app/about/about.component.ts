import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
