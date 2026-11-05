import { Component, inject, OnInit, signal } from '@angular/core';
import { PeopleService } from '../../services/people-service';
import { People } from '../../interfaces/people-list-response';
import { PeopleItemComponent } from '../people-item-component/people-item-component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPeopleComponent } from '../modal-people-component/modal-people-component';

@Component({
  imports: [PeopleItemComponent],
  selector: 'app-list-people-component',
  styleUrl: './list-people-component.css',
  templateUrl: './list-people-component.html',
})
export class ListPeopleComponent implements OnInit {
  peopleService = inject(PeopleService);

  modalService = inject(NgbModal);

  listPeople = signal<People[]>([]);

  ngOnInit(): void {
    this.peopleService.getAll().subscribe((resp) => {
      this.listPeople.set(resp.results);
    });
  }

  open(id: String) {
    //Nos subscribimos para poder asignarle el contenido al modal
    this.peopleService.getOne(id).subscribe((resp) => {
      const modalRef = this.modalService.open(ModalPeopleComponent);
      modalRef.componentInstance.people = resp;
    });
  }
}
