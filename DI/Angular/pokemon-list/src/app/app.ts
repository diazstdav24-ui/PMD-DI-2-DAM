import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonList } from './components/pokemon-list/pokemon-list';

@Component({
  imports: [RouterOutlet, NgbModule, PokemonList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pokemon-list');
}
