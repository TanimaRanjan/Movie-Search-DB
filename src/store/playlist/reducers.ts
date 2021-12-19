import { Movie , defaultState } from "./types"

const initialState = {
    playlist: [],
    message: 'You have no items in your playlist'
}

export default function playlistReducer(state = initialState, action:any):defaultState {
    switch (action.type) {
        case 'ADD_MOVIE': 
            return {  
                ...state,
                playlist: [action.payload, ...state.playlist.filter((movie:Movie)=>movie.imdbID !== action.payload.imdbID)],
            }
        case 'DELETE_MOVIE': 
            return {
                ...state, 
                playlist:[...state.playlist.filter((movie:Movie) => movie.imdbID !== action.payload)],
            }
        case 'CONFIRM_PLAYLIST': 
            return {
                playlist: [...initialState.playlist],
                message: 'Your playlist has been confirmed'
            }
        default:
            return {
                ...state
            }
    }
}

