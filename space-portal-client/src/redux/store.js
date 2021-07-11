import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const initialState = {
  feed: [],
};

export const store = createStore(rootReducer, initialState);
