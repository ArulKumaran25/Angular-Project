import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  templateUrl: './counter-app.component.html',
  styleUrls: ['./counter-app.component.css']
})
export class CounterAppComponent {
  count:number=0;
  increment(){
      this.count++;
  }
  decrement(){
    this.count--;
  }
  reset(){
    this.count=0;
  }

}