import React from "react";
import { useHistory } from "react-router-dom";

/* ----- Styles ----- */
import FooterStyle from './FooterStyle'

const ButtonFooter = ({ selectedImg,deselectedImg,title,uri,setTerm,term }) => {
  const styleClass = FooterStyle();
  const history = useHistory()

  const handleClick = () => {
        redirect()
        setTerm()
    }

    const redirect = () => history.push(uri)


    return (
        <div className={styleClass.btPadding} onClick={handleClick} >
            <img src={term.term===uri?selectedImg:deselectedImg} alt={title} />
            <p className="no-margin">{title}</p>
        </div>
    );
};

export default ButtonFooter;
