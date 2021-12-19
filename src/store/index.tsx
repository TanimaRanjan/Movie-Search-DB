import { createStore } from "redux";
import rootReducer from "./root-reducer";

export default function configureStore(defaultState?: any) {
  return createStore(rootReducer);
}

