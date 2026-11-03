import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../interfaces/people';

@Service()
export class PeopleService {
  private http = inject(HttpClient);

  getAllPersons(): Observable<People[]> {
    return this.http.get<People[]>(`https://ghibliapi.vercel.app/films`);
  }
}
