import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Container, Grid } from "@material-ui/core";

import RegisterDog from './components/elements/RegisterDog/RegisterDog'
import OnBoarding from "./components/elements/OnBoarding/Onboarding";
import Home from './components/elements/Home/Home'
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Container>
          <Grid container direction="column" justify="space-between" alignItems="center">
            <Route exact path='/'>
              <OnBoarding />
            </Route>

            <Route path='/register-dog'>
              <RegisterDog />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

          </Grid>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
