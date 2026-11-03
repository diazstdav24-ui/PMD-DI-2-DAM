import { Component, input } from '@angular/core';
import { Film } from '../../interfaces/film';

@Component({
  imports: [],
  selector: 'app-film-item-component',
  styleUrl: './film-item-component.css',
  templateUrl: './film-item-component.html',
})
export class FilmItemComponent {
  film = input<Film>();
}
