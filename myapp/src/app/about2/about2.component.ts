import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-about2',
  templateUrl: './about2.component.html',
  styleUrls: ['./about2.component.css']
})
export class About2Component implements OnInit {
   linkId;
  constructor(private AR: ActivatedRoute) { }

  ngOnInit() {
    this.AR.params.subscribe((item) => {
      let id = item['id'];
      this.linkId = id;
      console.log(id);
    });
  }

}
