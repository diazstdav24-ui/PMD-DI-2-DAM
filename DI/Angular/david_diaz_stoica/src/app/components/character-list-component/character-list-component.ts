import { Component, inject, input, signal } from '@angular/core';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../interfaces/character-list-response';
import { CharacterItemComponent } from '../character-item-component/character-item-component';

@Component({
  imports: [CharacterItemComponent],
  selector: 'app-character-list-component',
  styleUrl: './character-list-component.css',
  templateUrl: './character-list-component.html',
})
export class CharacterListComponent {
  characterService = inject(CharacterService);

  characterList = signal<Character[]>([]);

  ngOnInit(): void {
    this.characterService.getAll().subscribe((resp) => {
      // Y AQUÍ SETEAMOS UN NUEVO VALOR DEL SIGNAL
      this.characterList.set(resp.results);
    });
  }
}
