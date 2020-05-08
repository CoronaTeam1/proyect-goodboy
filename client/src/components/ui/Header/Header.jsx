import React from "react";
import HeaderStyle from './HeaderStyle'

const Footer = ({ title }) => {
    const styleClass = HeaderStyle();

    return (
        <div className={styleClass.topHeading}>
            {/* <img src="../../../../public/images/arrow.svg" /> */}
            <span>{title}</span>
        </div>
    );
};

export default Footer;