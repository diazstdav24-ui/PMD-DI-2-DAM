import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { EpisodeListResponse } from '../interfaces/episodio-list-response';

@Service()
export class EpisodeService {
  //inyectamios HttpCliente para que observe la API
  http = inject(HttpClient);

  //Metodo get para obtener todos los episodios de rick y morty
  getAll(): Observable<EpisodeListResponse> {
    return this.http.get<EpisodeListResponse>('https://rickandmortyapi.com/api/episode');
  }

  //La petición de un unico atr del json
  // @Service()
  // export class UserService {
  //   private http = inject(HttpClient);
  //   getUser(id: string): Observable<User> {
  //     return this.http.get<User>(`/api/user/${id}`);
  //   }
  // }
}
