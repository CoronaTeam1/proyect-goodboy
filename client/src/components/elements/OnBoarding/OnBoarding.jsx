import React from "react";
import { Grid } from "@material-ui/core";
import Carousel from "./Carousel/Carousel";
import ButtonGB from "../../ui/ButtonGB/Button";
import { useHistory } from "react-router-dom";

const Onboarding = () => {

  const history = useHistory()

  return(

  <Grid item xs={12} className="index-header">
    <img className="logo" src="../../../../images/logo.png" alt="Logo" />
    <Carousel/>
    
    <div onClick={() => history.push('/auth')}>
      <ButtonGB text="Continuar"/>
    </div>
  </Grid>
  )
};

export default Onboarding;