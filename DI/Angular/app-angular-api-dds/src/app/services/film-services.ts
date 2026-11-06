import { HttpBackend, HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { FilmListResponse } from '../interfaces/film-list-response';
import { Observable } from 'rxjs';

@Service()
export class FilmServices {
  http = inject(HttpClient);

  getAll(): Observable<FilmListResponse> {
    return this.http.get<FilmListResponse>('https://swapi.dev/api/films');
  }
}
