import { Component, inject, OnInit, signal } from '@angular/core';
import { EpisodeService } from '../../services/episode-service';
import { Episode } from '../../interfaces/episode-list-response';
import { EpisodeItemComponent } from '../episode-item-component/episode-item-component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EpisodeModal } from '../episode-modal/episode-modal';

@Component({
  imports: [EpisodeItemComponent],
  selector: 'app-episode-list-component',
  styleUrl: './episode-list-component.css',
  templateUrl: './episode-list-component.html',
})
export class EpisodeListComponent implements OnInit {
  episodeService = inject(EpisodeService);
  modalService = inject(NgbModal);
  episodList = signal<Episode[]>([]);

  ngOnInit(): void {
    this.episodeService.getAll().subscribe((resp) => {
      this.episodList.set(resp.results);
    });
  }

  openEpisodeModal(ID: number) {
    this.episodeService.getOne(ID).subscribe((resp) => {
      const MODALREF = this.modalService.open(EpisodeModal);

      MODALREF.componentInstance.episodeDetail = resp;
    });
  }
}
