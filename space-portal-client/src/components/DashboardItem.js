import React from "react";
import { connect } from "react-redux";

class DashboardItem extends React.Component {
  render() {
    return <h3>{JSON.stringify(this.props.feed)}</h3>;
  }
}

const mapStateToProps = (state) => ({
  feed: state.feed,
});

export default connect(mapStateToProps)(DashboardItem);
