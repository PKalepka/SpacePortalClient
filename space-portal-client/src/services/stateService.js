export const getDefaultDateRange = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  return [today, tomorrow];
};

export const getInitialState = () => {
  const [today, tomorrow] = getDefaultDateRange();

  return {
    startDate: today,
    endDate: tomorrow,
    feed: [],
  };
};
