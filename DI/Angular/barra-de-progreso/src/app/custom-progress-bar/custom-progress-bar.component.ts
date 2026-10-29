import { Component, input } from '@angular/core';

@Component({
  selector: 'app-custom-progress-bar',
  imports: [],
  templateUrl: './custom-progress-bar.component.html',
  styleUrl: './custom-progress-bar.component.css',
})
export class CustomProgressBarComponent {
  value = input<number>(0);
  color = input<string>('#198754');
}
