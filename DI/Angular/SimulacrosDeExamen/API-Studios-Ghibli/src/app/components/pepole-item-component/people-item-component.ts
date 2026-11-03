import { Component, input } from '@angular/core';
import { People } from '../../interfaces/people';

@Component({
  imports: [],
  selector: 'app-pepole-item-component',
  styleUrl: './pepole-item-component.css',
  templateUrl: './pepole-item-component.html',
})
export class PepoleItemComponent {
  people = input<People>();
}
