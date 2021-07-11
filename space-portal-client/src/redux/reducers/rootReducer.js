import { RESTORE_STATE } from "../actions/actionTypes";
import restoreStateReducer from "./restoreStateReducer";

const rootReducer = (state, action) => {
  switch (action.type) {
    case RESTORE_STATE:
      return restoreStateReducer(state, action);
    default:
      return state;
  }
};

export default rootReducer;
