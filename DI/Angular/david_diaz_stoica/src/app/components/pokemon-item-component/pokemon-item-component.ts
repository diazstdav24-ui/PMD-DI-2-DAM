import { Component, input, computed } from '@angular/core';
import { PokemonListItem } from '../../interfaces/pokemon-list-response.interface';

@Component({
  imports: [],
  selector: 'app-pokemon-item-component',
  styleUrl: './pokemon-item-component.css',
  templateUrl: './pokemon-item-component.html',
})
export class PokemonItemComponent {
  pokemon = input<PokemonListItem>();

  //: crea un valor derivado que se recalcula solo cuando cambia alguna de las señales
  // que lee dentro. Aquí lee this.id(), que a su vez depende de pokemon(),
  //  el input. Si el padre cambia el Pokémon, la URL se actualiza sin que hagas nada.

  id = computed(() => this.pokemon()?.url.split('/').at(-2));

  imageUrl = computed(
    () =>
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id()}.png`,
  );
}
