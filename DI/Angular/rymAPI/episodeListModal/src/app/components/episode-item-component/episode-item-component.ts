import { Component, input, output } from '@angular/core';
import { Episode } from '../../interfaces/episode-list-response';

@Component({
  imports: [],
  selector: 'app-episode-item-component',
  styleUrl: './episode-item-component.css',
  templateUrl: './episode-item-component.html',
})
export class EpisodeItemComponent {
  episode = input<Episode>();
  episodeClicked = output<number>();

  emitEpisodeClicked() {
    const ID = this.episode()?.id;
    ID ? this.episodeClicked.emit(ID) : alert('Episode no encontrado');
  }
}
