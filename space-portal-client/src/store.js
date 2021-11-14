import { createStore } from "redux";
import rootReducer from "./services/rootReducer";

const initialState = {
  feed: [],
};

export const store = createStore(rootReducer, initialState);
