import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="flex-header">
      <h2>{props.text}</h2>
    </div>
  );
};

export default Header;
