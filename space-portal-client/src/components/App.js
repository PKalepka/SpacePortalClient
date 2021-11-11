import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreState } from "../redux/actions/actionCreators";
import getFeedData from "../services/feedService";
import DashboardContainer from "./DashboardContainer";
import Header from "./Header";
import "../css/components/App.css";

const App = () => {
  const dispatch = useDispatch();
  const restoreDispatch = (feed) => {
    var action = restoreState(feed);
    dispatch(action);
  };

  useEffect(() => {
    async function fetchMyAPI() {
      var data = await getFeedData();
      restoreDispatch(data);
    }

    fetchMyAPI();
  });

  return (
    <div className="flex-container">
      <Header />
      <DashboardContainer />
    </div>
  );
};

export default App;