import { Component , Input, OnChanges , SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnChanges{
  @Input() text=''
  ngOnChanges(changes:SimpleChanges):void{
    if(!changes['text'].isFirstChange()){
      
      console.log('ngOnChanges Called!',changes['text'].currentValue)
      console.log('You are modifyin the original value');
      
    }
   
  }

}
