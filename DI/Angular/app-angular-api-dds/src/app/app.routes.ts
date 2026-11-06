import { Routes } from '@angular/router';
import { VehicleListPage } from './components/vehicle-list-page/vehicle-list-page';
import { FilmListPage } from './components/film-list-page/film-list-page';
import { FilmItemComponent } from './components/film-item-component/film-item-component';

export const routes: Routes = [
  {
    path: 'vehicle-list',
    component: VehicleListPage,
  },
  {
    path: 'film-list',
    component: FilmListPage,
  },
  {
    path: 'film-details',
    component: FilmItemComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'vehicle-list',
  },
];
