import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;
  tabamt = 0;
  total = 0;
 
doCount(){
  this.count += 1;
  this.calculate();
}
doReset(){
  this.count = 0;
  this.tabamt = 0;
  this.total = 0;
}

calculate(){
  this.total = this.count*this.tabamt;
}
}
