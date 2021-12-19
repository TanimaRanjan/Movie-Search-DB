export enum ACTION_TYPE {
  ADD_MOVIE = "ADD_MOVIE",
  DELETE_MOVIE = "DELETE_MOVIE",
  CONFIRM_PLAYLIST = "CONFIRM_PLAYLIST",
}

export function addMovie(movie: any): any {
  return {
    type: ACTION_TYPE.ADD_MOVIE,
    payload: movie,
  };
}

export function deleteMovie(movie: any): any {
  return {
    type: ACTION_TYPE.DELETE_MOVIE,
    payload: movie,
  };
}

export function confirmPlaylist(): any {
  return {
    type: ACTION_TYPE.CONFIRM_PLAYLIST,
  };
}
