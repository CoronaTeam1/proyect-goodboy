import React from "react";
import { Container, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/elements/headerMain";
import Carousel from "./components/elements/Carousel/Carousel";
import Button from "./components/elements/Button/Button";

import "./App.css";

function App() {
  return (
    <Container>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Header />
        <Carousel />
        <Button />
      </Grid>
    </Container>
  );
}

export default App;
