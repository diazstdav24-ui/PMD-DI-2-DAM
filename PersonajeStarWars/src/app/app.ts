import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from './person/person';

@Component({
  imports: [RouterOutlet, Person],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('PersonajeStarWars');
}
