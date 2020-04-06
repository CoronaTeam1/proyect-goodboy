import React from "react";

const ButtonsFooter = ({ url, title }) => {
    return (
        <div>
            <img src={url} alt={title} />
    <p className="no-margin">{title}</p>
        </div>
    );
};

export default ButtonsFooter;
