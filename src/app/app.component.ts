import { style } from '@angular/animations';
import {OnChanges,OnInit,DoCheck,OnDestroy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  //template:`<div>{{title}}</div>`
})
export class AppComponent implements OnChanges,OnInit,DoCheck,OnDestroy {
  title = 'my-first-app';

  headertitle="Welcome Girls";

  ngOnChanges(){
    console.log("on changes called");
    
  }
  ngOnInit(){
    console.log("on init called");
  }
  ngDoCheck(){
    console.log("on docheck called");
  }
  ngOnDestroy(){
    console.log("on destroy called");
  }
}
