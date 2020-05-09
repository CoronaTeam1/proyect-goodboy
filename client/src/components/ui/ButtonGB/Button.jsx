import React from "react";
/* ----- Components MaterialUI ----- */
import Button from '@material-ui/core/Button';
/* ----- Styles ----- */
import style from './Style'


const ButtonGB = ({text,link}) => {
  const styleClass = style()
  return (
        <Button variant="contained" className={`${styleClass.buttonGB}`} disableElevation>
          {text}
        </Button>
    
  )
}

export default ButtonGB;
