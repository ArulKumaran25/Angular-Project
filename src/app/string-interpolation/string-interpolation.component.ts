import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
     title='String Interpolation example'
     color='red';
     name="Learn Sring Interpolation";

     getTitle(){
      return this.name
     }
     getMax(first:number,second:number){
        return Math.max(first,second)
     }

}
