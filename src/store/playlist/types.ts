export interface Movie {
  Title: string;
  Poster: string;
  Type: string;
  Year: string;
  imdbID: string;
}


export interface defaultState {
  playlist: Movie[],
  message: string
}
