import { Component, inject, OnInit, signal } from '@angular/core';
import { FilmService } from '../../services/film-service';
import { Film } from '../../interfaces/film';
import { FilmItemComponent } from '../film-item-component/film-item-component';

@Component({
  imports: [FilmItemComponent],
  selector: 'app-film-list-component',
  styleUrl: './film-list-component.css',
  templateUrl: './film-list-component.html',
})
export class FilmListComponent implements OnInit {
  filmService = inject(FilmService);

  filmList = signal<Film[]>([]);

  ngOnInit(): void {
    this.filmService.getAllFilms().subscribe((resp) => {
      this.filmList.set(resp);
    });
  }
}
