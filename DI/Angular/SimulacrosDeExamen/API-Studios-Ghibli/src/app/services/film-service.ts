import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../interfaces/film';

@Service()
export class FilmService {
  private http = inject(HttpClient);

  getAllFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`https://ghibliapi.vercel.app/films`);
  }
}
