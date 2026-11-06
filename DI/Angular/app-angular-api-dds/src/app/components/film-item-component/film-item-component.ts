import { Component, input } from '@angular/core';
import { FilmItemResponse } from '../../interfaces/film-item-response';

@Component({
  imports: [],
  selector: 'app-film-item-component',
  styleUrl: './film-item-component.css',
  templateUrl: './film-item-component.html',
})
export class FilmItemComponent {
  film = input<FilmItemResponse>();
}
