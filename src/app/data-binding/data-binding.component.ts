import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  firstName='Arul';
  lastName='Kumaran';

  title='Learning the Property binding in Angular';

  context='Two-way Binding in Angular';
}
