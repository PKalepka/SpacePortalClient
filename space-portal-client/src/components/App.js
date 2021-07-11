import React from "react";
import { connect } from "react-redux";
import { restoreState } from "../redux/actions/actionCreators";
import feedService from "../services";
import DashboardContainer from "./DashboardContainer";
import "../css/components/App.css";

class App extends React.Component {
  async componentDidMount() {
    feedService().then((data) => {
      this.props.restoreState(data);
    });
  }

  render() {
    return <DashboardContainer />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    restoreState: (feed) => {
      var action = restoreState(feed);
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
