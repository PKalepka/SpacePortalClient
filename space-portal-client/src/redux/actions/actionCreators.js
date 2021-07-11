import { RESTORE_STATE } from "./actionTypes";

export const restoreState = (feed) => ({
  type: RESTORE_STATE,
  payload: feed,
});
