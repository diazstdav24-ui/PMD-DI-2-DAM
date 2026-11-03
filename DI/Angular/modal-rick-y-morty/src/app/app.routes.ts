import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list-component/character-list-component';
import { PageNotFound } from './errors/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: 'character-list',
    component: CharacterListComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'character-list',
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
