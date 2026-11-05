import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleListResponse } from '../interfaces/people-list-response';
import { PeopleDetailResponse } from '../interfaces/people-detail-item-response';

@Service()
export class PeopleService {
  http = inject(HttpClient);

  getAll(): Observable<PeopleListResponse> {
    return this.http.get<PeopleListResponse>('https://swapi.dev/api/people/');
  }

  getOne(id: String): Observable<PeopleDetailResponse> {
    return this.http.get<PeopleDetailResponse>(`https://swapi.dev/api/people/${id}/`);
  }
}
