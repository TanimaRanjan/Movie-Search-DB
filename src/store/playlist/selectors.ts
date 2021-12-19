import { Movie } from "./types"


export const getPlaylist = (state: any) : Movie[] => {
    return state.playlist
}


export const getPlaylistCount = (state: any) : Movie[] => {
    return state.playlist.length
}

