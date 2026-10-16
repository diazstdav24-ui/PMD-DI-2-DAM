import { Component } from '@angular/core';
import { PokemonItem } from '../pokemon-item/pokemon-item';

const POKEMONS: Pokemon[] = [
  {
    id: 1,
    nombrePokemon: 'Leafeon',
    photoUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.pokemondb.net%2Fartwork%2Fvector%2Flarge%2Fleafeon.png&f=1&nofb=1&ipt=b4cb083959a0726d44b8d76d919ec7c9e00d60aaa5fb85eef14f30d0c4f077b1&ipo=images',
    tipo: 'Planta',
  },
  {
    id: 1,
    nombrePokemon: 'Tepig',
    photoUrl:
      'https://static.wikia.nocookie.net/wiki_marriland/images/5/5b/498Tepig.png/revision/latest/scale-to-width-down/161?cb=20120909020443',
    tipo: 'Fuego',
  },
];

@Component({
  imports: [PokemonItem],
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.css',
  templateUrl: './pokemon-list.html',
})
export class PokemonList {
  pokemonList = POKEMONS;
}
