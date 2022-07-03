import { getInitialState } from "../../../services/stateService";

export default function restoreStateReducer(state, action) {
  const initialState = getInitialState();
  initialState.feed = action.payload == null ? [] : action.payload;

  return {
    startDate: initialState.startDate,
    endDate: initialState.endDate,
    feed:
      !Array.isArray(initialState.feed) || !initialState.feed.length
        ? []
        : [...initialState.feed],
  };
}
