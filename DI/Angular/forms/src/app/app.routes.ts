import { Routes } from '@angular/router';
import { RegisterFormComponent } from './components/register-form-component/register-form-component';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
  {
    path: 'form',
    component: RegisterFormComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: RegisterFormComponent,
  },
  { path: '**', component: NotFoundPage },
];
