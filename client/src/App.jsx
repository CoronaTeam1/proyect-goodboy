import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Container, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/elements/headerMain";
import Carousel from "./components/elements/Carousel/Carousel";
import Button from "./components/elements/Button/Button";
import RegisterDog from './components/elements/registerDog/registerDog'
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Container>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="center"
            >
              <Route exact path='/'>
                <Header />
                <Carousel />
                <Button />
              </Route>

              <Route path='/register-dog'>
                <RegisterDog />
              </Route>

            </Grid>
          </Container>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
