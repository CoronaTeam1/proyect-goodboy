import React from "react";
import { useHistory } from "react-router-dom";

/* ----- Styles ----- */
import FooterStyle from './FooterStyle'

const ButtonFooter = ({ selectedImg,deselectedImg,title,uri,setTerm,term }) => {
  const styleClass = FooterStyle();
  const history = useHistory()
//   console.log("SOY :",uri,' y el term es:',term)

  const handleClick = () => {
        setTerm()
        // redirect()
        
        console.log('The term:',term,'my uri',uri)
    }

    const redirect = () => history.push(uri)


    return (
        <div className={styleClass.btPadding} onClick={handleClick} >
            <img src={term===uri?selectedImg:deselectedImg} alt={title} />
            <p className="no-margin">{title}</p>
        </div>
    );
};

export default ButtonFooter;
