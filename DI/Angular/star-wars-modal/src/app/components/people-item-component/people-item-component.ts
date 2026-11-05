import { Component, input, output, Signal } from '@angular/core';
import { People } from '../../interfaces/people-list-response';

@Component({
  imports: [],
  selector: 'app-people-item-component',
  styleUrl: './people-item-component.css',
  templateUrl: './people-item-component.html',
})
export class PeopleItemComponent {
  people = input<People>();

  id: string = '';

  peopleClicked = output<String>();

  getPeopleId() {
    return (this.id = this.people()?.url.split('/')[6]!);
  }

  emitPeopleClicked() {
    const id = this.getPeopleId();
    this.peopleClicked.emit(id); //Esto hace que propague el id hacia el padre (list) (Ver component list)
  }
}
