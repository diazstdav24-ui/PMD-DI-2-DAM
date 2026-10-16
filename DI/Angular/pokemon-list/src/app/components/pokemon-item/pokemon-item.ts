import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-pokemon-item',
  styleUrl: './pokemon-item.css',
  templateUrl: './pokemon-item.html',
})
export class PokemonItem {
  pokemon = input<Pokemon>();
}
