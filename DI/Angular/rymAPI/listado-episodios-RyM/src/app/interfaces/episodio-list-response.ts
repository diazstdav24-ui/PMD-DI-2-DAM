import { Episode } from './episodio-detail-response';

//Tengo la lisrta de episodios, adenmás hago referencia a Episode de la interfaz episodio-detail-responmse
//Es por eso que necesito importar
export interface EpisodeListResponse {
  info: Info;
  results: Episode[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}
