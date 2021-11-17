import React from "react";
import "./DashboardItem.css";

const DashboardItem = (props) => {
  var item = props.item;
  return (
    <li className="flex-listitem">
      <div>
        <span>{item.id ? item.id.toString() : "*"}</span>
        <span>{item.reference_id}</span>
        <span>{item.name}</span>
        <span>{item.is_potentially_hazardous.toString()}</span>
        <span>
          <a href={item.nasa_jpl_url}>NASA JPL URL</a>
        </span>
      </div>
    </li>
  );
}

export default DashboardItem;