import React from "react";
import HeaderStyle from './HeaderStyle'

const Footer = ({title}) => {
    const styleClass = HeaderStyle();

    return (
        <div className={styleClass.topHeading}>
            <span>{title}</span>
        </div>
    );
};

export default Footer;