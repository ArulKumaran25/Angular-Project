import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  title='List of Movies';
  title1='Movies and its Directors';
  num=0;
  showMe=true;

  movies=[
    'Leo',
    'Jailer',
    'Indian',
    'Good-bad-ugly'
  ]
  movies_details=[
    {title:'Leo',director:'Lokesh'},
    {title:'Jailer',director:'Nelson'},
    {title:'Indian',director:'Shankar'},
    {title:'Good-bad-ugly',director:'Aadhik'}

  ]

  enableRed=false;
  enableBig=false;
  enableItalics=false;


  status='success';
  color='black';
}
