import { Component, inject, OnInit, signal } from '@angular/core';
import { PepoleItemComponent } from '../pepole-item-component/people-item-component';
import { PeopleService } from '../../services/people-service';
import { People } from '../../interfaces/people';

@Component({
  imports: [PepoleItemComponent],
  selector: 'app-pepole-list-component',
  styleUrl: './pepole-list-component.css',
  templateUrl: './pepole-list-component.html',
})
export class PepoleListComponent implements OnInit {
  peopleService = inject(PeopleService);

  peopleList = signal<People[]>([]);

  ngOnInit(): void {
    this.peopleService.getAllPersons().subscribe((resp) => {
      this.peopleList.set(resp);
    });
  }
}
