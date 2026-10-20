import { Component, inject, OnInit, signal } from '@angular/core';
import { CocktailItemComponent } from '../cocktail-item-component/cocktail-item-component';
import { CocktailService } from '../../services/cocktail-service';
import { Drink } from '../../interfaces/cocktail-list-response';

@Component({
  imports: [CocktailItemComponent],
  selector: 'app-cocktail-list-component',
  styleUrl: './cocktail-list-component.css',
  templateUrl: './cocktail-list-component.html',
})
export class EpisodeListComponent implements OnInit {
  cocktailService = inject(CocktailService);
  // ATENCIÓN DECLARAMOS LA VARIABLE DE TIPO SIGNAL
  drinkList = signal<Drink[]>([]);

  ngOnInit(): void {
    this.cocktailService.getAll().subscribe((resp) => {
      // Y AQUÍ SETEAMOS UN NUEVO VALOR DEL SIGNAL
      this.cocktailService.set(resp.drinks);
    });
  }
}
