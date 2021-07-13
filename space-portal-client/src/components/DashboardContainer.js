import React from "react";
import { connect } from "react-redux";
import DashboardItem from "./DashboardItem";
import "../css/components/DashboardContainer.css";

class DashboardContainer extends React.Component {
  render() {
    const dashboardItem = this.props.asteroids.map((asteroid) => {
      return (
        <DashboardItem key={asteroid.id}
          item={asteroid} />
      )
    })
  
    return (
      <div className="flex-todolist">
        <ul>
          {dashboardItem}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    asteroids: state.feed
  }
};

export default connect(mapStateToProps)(DashboardContainer);
