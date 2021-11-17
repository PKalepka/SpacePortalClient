import React from "react";
import "./DashboardItem.css";

const DashboardItem = (props) => {
  var item = props.item;
  return (
    <li className="flex-listitem">
      <div>
        <span>{item.id ? item.id.toString() : "*"}</span>
        <span>{item.referenceId}</span>
        <span>{item.name}</span>
        <span>{item.isPotentiallyHazardous.toString()}</span>
        <span>
          <a href={item.nasaJplUrl}>NASA JPL URL</a>
        </span>
      </div>
    </li>
  );
}

export default DashboardItem;