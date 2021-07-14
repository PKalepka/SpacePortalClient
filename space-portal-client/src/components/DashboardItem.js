import React from "react";
import "../css/components/DashboardItem.css";

export default class DashboardItem extends React.Component {
  render() {
    var item = this.props.item;
    return (
      <li className="flex-listitem">
        <div>
          <span>{item.id.toString()}</span>
          <span>{item.reference_id}</span>
          <span>{item.name}</span>
          <span>{item.is_potentially_hazardous.toString()}</span>
          <span><a href={item.nasa_jpl_url}>NASA JPL URL</a></span>
        </div>
      </li>
    );
  }
}
