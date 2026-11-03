import { Component, inject, OnInit, signal } from '@angular/core';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../interfaces/character-list-response';
import { CharacterItemComponent } from '../character-item-component/character-item-component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterModal } from '../character-modal/character-modal';
@Component({
  imports: [CharacterItemComponent],
  selector: 'app-character-list-component',
  styleUrl: './character-list-component.css',
  templateUrl: './character-list-component.html',
})
export class CharacterListComponent implements OnInit {
  characterService = inject(CharacterService);
  characterList = signal<Character[]>([]);
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.characterService.getAll().subscribe((resp) => {
      this.characterList.set(resp.results);
    });
  }

  openCharacterModal(id: number) {
    this.characterService.getOne(id).subscribe((resp) => {
      const modalRef = this.modalService.open(CharacterModal);

      modalRef.componentInstance.characterDetail = resp;
    });
  }
}
