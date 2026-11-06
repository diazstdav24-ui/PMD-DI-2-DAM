import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { FilmResponse } from '../interfaces/film-response';
import { Observable } from 'rxjs';

@Service()
export class FilmService {
  http = inject(HttpClient);

  getAll(): Observable<FilmResponse> {
    return this.http.get<FilmResponse>('https://ghibliapi.vercel.app/films');
  }
}
