import { RESTORE_STATE } from "../scenes/Home/services/actionTypes";
import restoreStateReducer from "../scenes/Home/services/restoreStateReducer";

const rootReducer = (state, action) => {
  switch (action.type) {
    case RESTORE_STATE:
      return restoreStateReducer(state, action);
    default:
      return state;
  }
};

export default rootReducer;
