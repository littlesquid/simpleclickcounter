import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;

doCount(){
  this.count += 1;
}
doReset(){
  this.count = 0;
}
}
