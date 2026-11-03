import { Component, inject } from '@angular/core';
import { EpisodioItemComponent } from '../episodio-item-component/episode-item-component';
import { EpisodeService } from '../../services/episodeService';
import { Episode } from '../../interfaces/episodio-detail-response';

@Component({
  imports: [EpisodioItemComponent],
  selector: 'app-episodios-list-component',
  styleUrl: './episode-list-component.css',
  templateUrl: './episode-list-component.html',
})
export class EpisodiosListComponent {
  //En el componente inyectamos el servicio donde se hace la petición y lo pasamos a la siguiente variable
  episodiosService = inject(EpisodeService);

  //Creamos la lista con los episodios de la lista
  episodioList: Episode[] = [];

  //Realizamos las peticiones a la api
  loadEpisodeList() {
    //Que ete servicio obtenga todos los capitulos (Dwe forma asíncrona) y la respuesta que la añada a la lista de episodios que acabo de declarar
    this.episodiosService.getAll().subscribe((resp) => {
      console.log(resp);
      this.episodioList = resp.results;
    });
  }
}
