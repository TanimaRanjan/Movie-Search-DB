import { Movie, defaultState } from "./types"


export const getPlaylist = (state: any) : defaultState  => {
    return state.playlist
}


export const getPlaylistCount = (state: any) : number => {
    return state.playlist.playlist.length
}

export const getMovieByID = (state: any, id: string) : Movie => {
    return state.playlist.playlist.find((movie: Movie) => movie.imdbID === id)
}
