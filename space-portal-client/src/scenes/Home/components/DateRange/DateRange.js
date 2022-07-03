import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStartDate, changeEndDate } from "../../services/actionCreators";
import DatePicker from "react-datepicker";

import getFeed from "../../services/feedService";
import "react-datepicker/dist/react-datepicker.css";

const DateRange = () => {
  const state = useSelector((state) => state);
  const [startDate, setStartDate] = useState(state.startDate);
  const [endDate, setEndDate] = useState(state.endDate);

  const dispatch = useDispatch();
  const startDateDispatch = (date) => {
    setStartDate(date);
    state.startDate = date;
    (async () => {
      state.feed = await getFeed(state.startDate, state.endDate);
      var action = changeStartDate(state);
      dispatch(action);
    })();
  };
  const endDateDispatch = (date) => {
    setEndDate(date);
    state.endDate = date;
    (async () => {
      state.feed = await getFeed(state.startDate, state.endDate);
      var action = changeEndDate(state);
      dispatch(action);
    })();
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => startDateDispatch(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => endDateDispatch(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </div>
  );
};

export default DateRange;
