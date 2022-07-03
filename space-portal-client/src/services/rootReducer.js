import {
  CHANGE_START_DATE,
  CHANGE_END_DATE,
  RESTORE_STATE,
} from "../scenes/Home/services/actionTypes";
import endDateReducer, {
  startDateReducer,
} from "../scenes/Home/services/dateRangeReducer";
import restoreStateReducer from "../scenes/Home/services/restoreStateReducer";

const rootReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_START_DATE:
      return startDateReducer(state, action);
    case CHANGE_END_DATE:
      return endDateReducer(state, action);
    case RESTORE_STATE:
      return restoreStateReducer(state, action);
    default:
      return state;
  }
};

export default rootReducer;
