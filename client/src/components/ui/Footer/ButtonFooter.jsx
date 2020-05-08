import React from "react";
/* ----- Styles ----- */
import FooterStyle from './FooterStyle'

const ButtonFooter = ({ url, title }) => {
  const styleClass = FooterStyle();

    return (
        <div className={styleClass.btPadding} >
            <img src={url} alt={title} />
            <p className="no-margin">{title}</p>
        </div>
    );
};

export default ButtonFooter;
