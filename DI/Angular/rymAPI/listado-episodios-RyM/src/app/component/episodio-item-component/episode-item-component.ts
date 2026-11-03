import { Component, input } from '@angular/core';
import { Episode } from '../../interfaces/episodio-detail-response';

@Component({
  imports: [],
  selector: 'app-episodio-item-component',
  styleUrl: './episode-item-component.css',
  templateUrl: './episode-item-component.html',
})
export class EpisodioItemComponent {
  episode = input<Episode>();
}
