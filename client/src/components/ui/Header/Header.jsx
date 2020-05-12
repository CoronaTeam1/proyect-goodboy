import React from "react";
import { Link } from "react-router-dom";
/* ----- Styles ----- */
import HeaderStyle from "./HeaderStyle";


const Header = ({ title, route}) => {

  const styleClass = HeaderStyle();

  return (
    <div className={styleClass.topHeading}>
      <Link to={`/${route}`}>
        <img className="margin-right" alt="arrow" src="../../../../images/arrowBack.svg" />
      </Link>
      <span className="margin-right">{title}</span>
    </div>
  );
};

export default Header;
