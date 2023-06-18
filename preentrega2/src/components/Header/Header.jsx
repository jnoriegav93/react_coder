import React from "react";
import "./Header.css";

import img from "../../assets/dp-logo.png";
const Header = (props) => {
  return (
    <div className="Header">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <img src={img} alt="logo-proyecto" width={"200px"} />
    </div>
  );
};

export default Header;
