import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list-component/pokemon-list-component';
import {Po}

export const routes: Routes = [
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },

  { path: 'pokemon', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },

  { path: 'berries', component: BerryListComponent },
  { path: 'berries/:id', component: BerryDetailComponent },

  { path: 'items', component: ItemListComponent },
  { path: 'items/:id', component: ItemDetailComponent },
];
