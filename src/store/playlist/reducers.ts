import { Movie } from "./types"

const initialState: Movie[] = []  

export default function playlistReducer(state = initialState, action:any):Movie[] {
    switch (action.type) {
        case 'ADD_MOVIE': 
            return [
                ...state, 
                action.payload
            ]
        case 'DELETE_MOVIE': 
            return [
                 ...state.filter((movie:Movie) => movie.imdbID !== action.payload)
            ]
        case 'CONFIRM_PLAYLIST': 
            return [
                ...initialState
            ]
        default:
            return [
                ...state
            ]
    }
}

