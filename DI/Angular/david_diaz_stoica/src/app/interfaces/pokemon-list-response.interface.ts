export interface PokemonListResponse {
  count: number;
  next: string;
  previous: any;
  results: PokemonListItem[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}
