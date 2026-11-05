import { Routes } from '@angular/router';
import { ListPeopleComponent } from './components/list-people-component/list-people-component';

export const routes: Routes = [
  {
    path: 'people-list',
    component: ListPeopleComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'people-list',
  },
];
