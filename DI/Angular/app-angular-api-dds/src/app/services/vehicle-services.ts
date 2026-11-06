import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleListResponse } from '../interfaces/vehicle-list-response';
import { VehicleDetailItemResponse } from '../interfaces/vehicle-detail-item-response';

@Service()
export class VehicleServices {
  http = inject(HttpClient);

  getAll(): Observable<VehicleListResponse> {
    return this.http.get<VehicleListResponse>('https://swapi.dev/api/vehicles');
  }

  getOne(id: string): Observable<VehicleDetailItemResponse> {
    return this.http.get<VehicleDetailItemResponse>(`https://swapi.dev/api/vehicles/${id}/`);
  }
}
