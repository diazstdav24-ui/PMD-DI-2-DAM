import { Service } from '@angular/core';
import { inject } from '@angular/core';
import { CocktailListResponse, Drink } from '../interfaces/cocktail-list-response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Service()
export class CocktailService {
  set(drinks: Drink[]) {
    throw new Error('Method not implemented.');
  }
  private http = inject(HttpClient);
  getAll(): Observable<CocktailListResponse> {
    return this.http.get<CocktailListResponse>(
      `https://www.thecocktaildb.com/api/json/v1/1/latest.php`,
    );
  }
}
