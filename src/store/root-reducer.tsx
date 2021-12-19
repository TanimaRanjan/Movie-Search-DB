import { combineReducers } from "redux";
import moviesReducer from "./movies/reducers";
import playlistReducer from "./playlist/reducers";

export default combineReducers({
  playlist: playlistReducer,
  movies: moviesReducer,
});
