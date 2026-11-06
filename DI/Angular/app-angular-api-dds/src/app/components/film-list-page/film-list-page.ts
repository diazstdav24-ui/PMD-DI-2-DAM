import { Component, inject, signal } from '@angular/core';
import { FilmItemComponent } from '../film-item-component/film-item-component';
import { FilmServices } from '../../services/film-services';
import { Film } from '../../interfaces/film-list-response';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [FilmItemComponent],
  selector: 'app-film-list-page',
  styleUrl: './film-list-page.css',
  templateUrl: './film-list-page.html',
})
export class FilmListPage {
  filmServices = inject(FilmServices);

  route = inject(ActivatedRoute);
  router = inject(Router);

  filmList = signal<Film[]>([]);

  constructor() {
    this.router.navigate(['/film-details', { id: 'id' }]);

    this.route.params.subscribe((params) => {
      const view = params['view']; // e.g., 'grid'
      const filter = params['get'];
    });
  }

  ngOnInit(): void {
    this.filmServices.getAll().subscribe((film) => {
      this.filmList.set(film.results);
    });
  }
}
