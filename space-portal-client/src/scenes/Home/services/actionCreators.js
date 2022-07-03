import { CHANGE_START_DATE } from "./actionTypes";
import { CHANGE_END_DATE } from "./actionTypes";
import { RESTORE_STATE } from "./actionTypes";

export const changeStartDate = (state) => ({
  type: CHANGE_START_DATE,
  payload: state,
});

export const changeEndDate = (state) => ({
  type: CHANGE_END_DATE,
  payload: state,
});

export const restoreState = (feed) => ({
  type: RESTORE_STATE,
  payload: feed,
});
