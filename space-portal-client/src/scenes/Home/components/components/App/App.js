import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreState } from "../../../services/actionCreators";
import getFeed from "../../../services/feedService";
import DashboardContainer from "../../Dashboard/DashboardContainer";
import Header from "../../../../../components/Header/Header";
import DateRange from "../../DateRange/DateRange";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const restoreDispatch = (feed) => {
    var action = restoreState(feed);
    dispatch(action);
  };

  useEffect(() => {
    async function fetchMyAPI() {
      var data = await getFeed();
      restoreDispatch(data);
    }

    fetchMyAPI();
  });

  return (
    <div className="flex-container">
      <Header text="Nearest to Earth asteroids" />
      <DateRange />
      <DashboardContainer />
    </div>
  );
};

export default App;
