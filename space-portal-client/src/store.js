import { createStore } from "redux";
import rootReducer from "./services/rootReducer";
import { getInitialState } from "./services/stateService";

const initialState = getInitialState();

export const store = createStore(rootReducer, initialState);
