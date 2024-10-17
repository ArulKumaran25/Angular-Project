import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
     title=' Example for String Interpolation'
     color='Brown';

     name="Example for calling the function String Interpolation";
     getTitle(){
      return this.name
     }
     getMax(first:number,second:number){
        return Math.max(first,second)
     }

}
