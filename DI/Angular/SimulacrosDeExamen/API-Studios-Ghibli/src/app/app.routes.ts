import { Routes } from '@angular/router';
import { FilmListComponent } from './components/film-list-component/film-list-component';
import { App } from './app';
import { PepoleListComponent } from './components/pepole-list-component/pepole-list-component';

export const routes: Routes = [
  {
    path: 'film-list',
    component: FilmListComponent,
  },
  {
    path: 'people-list',
    component: PepoleListComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: App,
  },
];
