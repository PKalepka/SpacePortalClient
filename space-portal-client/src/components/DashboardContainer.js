import React from "react";
import { connect } from "react-redux";
import DashboardItem from "./DashboardItem";
import "../css/components/DashboardContainer.css";

function DashboardContainer(props) {
  const dashboardItem = props.asteroids.map((asteroid) => {
    return <DashboardItem key={asteroid.id} item={asteroid} />;
  });

  return (
    <div className="flex-todolist">
      <ul>{dashboardItem}</ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    asteroids: state.feed,
  };
};

export default connect(mapStateToProps)(DashboardContainer);
