import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PeopleDetailResponse } from '../../interfaces/people-detail-item-response';

@Component({
  imports: [],
  selector: 'app-modal-people-component',
  styleUrl: './modal-people-component.css',
  templateUrl: './modal-people-component.html',
})
export class ModalPeopleComponent {
  activeModal = inject(NgbActiveModal);

  @Input() people: PeopleDetailResponse | undefined;
}
