import React from "react";
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import style from './Style'

const ButtonGB = ({text}) => {
  const styleClass = style()

  return (
      <Button variant="contained" className={styleClass.buttonGB} disableElevation>
        {text}
      </Button>
    
  )
}

export default ButtonGB;
