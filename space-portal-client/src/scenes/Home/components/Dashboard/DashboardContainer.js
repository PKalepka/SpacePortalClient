import React from "react";
import { useSelector } from "react-redux";
import DashboardItem from "./DashboardItem";
import "./DashboardContainer.css";

const DashboardContainer = () => {
  const asteroids = useSelector((state) => state.feed);

  const dashboardItem = asteroids.map((asteroid) => (
    <DashboardItem key={asteroid.id} item={asteroid} />
  ));

  return (
    <div className="flex-todolist">
      <ul>{dashboardItem}</ul>
    </div>
  );
};

export default DashboardContainer;
