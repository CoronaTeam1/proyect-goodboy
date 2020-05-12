import React from "react";
import { useHistory } from "react-router-dom";
/* ----- RRD components ----- */
import Carousel from "./Carousel/Carousel";
/* ----- UI components ----- */
import ButtonGB from "../../ui/ButtonGB/Button";
/* ----- MaterialUI ----- */
import { Grid } from "@material-ui/core";

const Onboarding = () => {

  const history = useHistory()

  return(

  <Grid item xs={12} className="index-header">
    <h1>Bienvenido!</h1>
    <img className="logo" src="../../../../images/logo.png" alt="Logo" />
    <Carousel/>
    
    <div onClick={() => history.push('/auth')}>
      <ButtonGB text="Continuar"/>
    </div>
  </Grid>
  )
};

export default Onboarding;