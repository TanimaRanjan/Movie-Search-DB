import { Movie } from "../playlist/types";

const initialState: Movie[] = [];

export default function moviesReducer(
  state = initialState,
  action: any
): Movie[] {
  switch (action.type) {
    case "ADD_MOVIES":
      return [...action.payload];
    default:
      return [...state];
  }
}
