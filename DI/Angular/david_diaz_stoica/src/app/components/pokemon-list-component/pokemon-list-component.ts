import { Component, inject, signal } from '@angular/core';
import { PokemonService } from '../../service/pokemon-service';
import { PokemonListItem } from '../../interfaces/pokemon-list-response.interface';
import { PokemonItemComponent } from '../pokemon-item-component/pokemon-item-component';

@Component({
  imports: [PokemonItemComponent],
  selector: 'app-pokemon-list-component',
  styleUrl: './pokemon-list-component.css',
  templateUrl: './pokemon-list-component.html',
})
export class PokemonListComponent {
  private service = inject(PokemonService);

  pokemonList = signal<PokemonListItem[]>([]);

  ngOnInit(): void {
    this.service.getAll().subscribe((resp) => {
      this.pokemonList.set(resp.results);
    });
  }
}
