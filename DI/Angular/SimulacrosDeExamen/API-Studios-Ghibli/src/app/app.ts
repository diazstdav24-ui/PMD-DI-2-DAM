import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FilmListComponent } from './components/film-list-component/film-list-component';

@Component({
  imports: [RouterOutlet, FilmListComponent, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('API-Studios-Ghibli');
}
