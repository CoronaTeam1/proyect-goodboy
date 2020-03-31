import React from "react";
import { Grid } from "@material-ui/core";
import Carousel from "./Carousel/Carousel";
import ButtonGB from "../../ui/ButtonGB/Button";


const Onboarding = () => (
  <Grid item xs={12} className="index-header">
    <h1>Bienvenido!</h1>
    <img src="#" alt="Logo" />
    <Carousel/>
    <ButtonGB text="Continuar"/>
  </Grid>
);

export default Onboarding;