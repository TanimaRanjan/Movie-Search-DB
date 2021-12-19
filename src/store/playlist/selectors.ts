import { Movie, defaultState } from "./types"


export const getPlaylist = (state: any) : defaultState  => {
    return state.playlist
}


export const getPlaylistCount = (state: any) : number => {
    return state.playlist.playlist.length
}

