import { Component } from '@angular/core';
import { CustomProgressBarComponent } from './custom-progress-bar/custom-progress-bar.component';

@Component({
  selector: 'app-root',
  imports: [CustomProgressBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
