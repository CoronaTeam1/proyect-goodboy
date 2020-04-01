import React from "react";
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import style from './Style'

const ButtonGB = (props) => {
  const styleClass = style()

  return (
    <Grid item xs={12} className={styleClass.card}>
      <Button className={styleClass.buttonGB}>
        {props.text}
      </Button>
    </Grid>
  )
}

export default ButtonGB;
