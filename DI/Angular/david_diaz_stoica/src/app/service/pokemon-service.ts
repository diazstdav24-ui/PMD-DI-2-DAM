import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../interfaces/pokemon-list-response.interface';

@Service()
export class PokemonService {
  private http = inject(HttpClient);

  getAll(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(`https://pokeapi.co/api/v2/pokemon/`);
  }
}
