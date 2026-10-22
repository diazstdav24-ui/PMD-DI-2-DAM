import { Component, signal } from '@angular/core';
import { EpisodiosListComponent } from './component/episode-list-component/episode-list-component';

@Component({
  imports: [EpisodiosListComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('listado-episodios-RyM');
}
