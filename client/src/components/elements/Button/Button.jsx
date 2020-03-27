import React from "react";
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import style from './style'

const indexButton = () => {
  const styleClass = style()

 return (
  <Grid item xs={12} className={styleClass.card}>
    <Button className={styleClass.button}>
      Continuar
    </Button>
  </Grid>
)}

export default indexButton;
