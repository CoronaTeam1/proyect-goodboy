import React from "react";
import HeaderStyle from "./HeaderStyle";
import { Link } from "react-router-dom";

const Footer = ({ title, route}) => {
  const styleClass = HeaderStyle();

  return (
    <div className={styleClass.topHeading}>
      <Link to={`/${route}`}>
        <img className="margin-right" src="../../../../images/arrowBack.svg" />
      </Link>
      <span className="margin-right">{title}</span>
    </div>
  );
};

export default Footer;
