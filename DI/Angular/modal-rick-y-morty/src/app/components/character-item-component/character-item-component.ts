import { Component, input, output } from '@angular/core';
import { Character } from '../../interfaces/character-list-response';

@Component({
  imports: [],
  selector: 'app-character-item-component',
  styleUrl: './character-item-component.css',
  templateUrl: './character-item-component.html',
})
export class CharacterItemComponent {
  character = input<Character>();
  characterClicked = output<number>();

  emitCharacterClicked() {
    debugger;
    const id = this.character()?.id;
    id ? this.characterClicked.emit(id) : alert('Personaje no encontrado');
    console.log(id)
  }
}
