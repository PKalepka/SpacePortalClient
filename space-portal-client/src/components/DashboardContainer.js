import React from "react";
import { connect } from "react-redux";
import DashboardItem from "./DashboardItem";

class DashboardContainer extends React.Component {
  render() {
    return <DashboardItem />;
  }
}

export default connect()(DashboardContainer);
