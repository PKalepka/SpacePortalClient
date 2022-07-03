export function startDateReducer(state, action) {
  return {
    startDate: action.payload,
    endDate: state.endDate,
    feed: state.feed,
  };
}

export default function endDateReducer(state, action) {
  return {
    startDate: state.startDate,
    endDate: action.payload,
    feed: state.feed,
  };
}
