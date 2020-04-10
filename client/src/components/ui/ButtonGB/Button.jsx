import React from "react";
import Button from '@material-ui/core/Button';
import style from './Style'
import { useHistory } from "react-router-dom";


const ButtonGB = ({text,link}) => {
  const styleClass = style()

  return (
        <Button variant="contained" className={styleClass.buttonGB} disableElevation>
          {text}
        </Button>
    
  )
}

export default ButtonGB;
