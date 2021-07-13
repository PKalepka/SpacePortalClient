import React from "react";
import "../css/components/DashboardItem.css";

export default class DashboardItem extends React.Component {
  render() {
    var item = this.props.item;
    return (
      <li className="flex-listitem">
        <div>
          <span>{item.id}</span>
          <span>{item.reference_id}</span>
          <span>{item.name}</span>
          <span>{item.is_potentially_hazardous.toString()}</span>
          <span>{item.date}</span>
        </div>
      </li>
    );
  }
}
