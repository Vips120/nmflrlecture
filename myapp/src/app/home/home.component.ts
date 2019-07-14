import { Component, OnInit, Renderer, ElementRef } from '@angular/core';
import {fromEvent} from 'rxjs';
import { map,filter,debounceTime } from "rxjs/operators";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private RD: Renderer, private ER: ElementRef) {
    // let Search = this.ER.nativeElement.querySelector('#search');
    // this.RD.setElementStyle(Search, 'BackgroundColor', 'red')
  }

  ngOnInit() {
  }
  Search(){
    let Search = this.ER.nativeElement.querySelector('#search');
  let p = fromEvent(Search, 'keyup')
                  .pipe(map((e:any) => e.target.value),
                        filter(text => text.length>=3),
                        debounceTime(2000)
                  );
  p.subscribe(data => console.log(data));
  }

}
