import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { EpisodeListResponse } from '../interfaces/episode-list-response';
import { EpisodeDetailResponse } from '../interfaces/epsiode-detail-response';
import { Observable } from 'rxjs';

@Service()
export class EpisodeService {
  http = inject(HttpClient);

  getAll(): Observable<EpisodeListResponse> {
    return this.http.get<EpisodeListResponse>('https://rickandmortyapi.com/api/episode');
  }
  getOne(ID: Number): Observable<EpisodeDetailResponse> {
    return this.http.get<EpisodeDetailResponse>(`https://rickandmortyapi.com/api/episode/${ID}`);
  }
}
