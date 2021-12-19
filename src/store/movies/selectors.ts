import { Movie } from "../playlist/types";

export const getMovies = (state: any): Movie[] => {
  return state.movies;
};
