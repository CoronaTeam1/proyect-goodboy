import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Container, Grid } from "@material-ui/core";

import RegisterDog from './components/elements/RegisterDog/RegisterDog'
import "./App.css";
import Onboarding from "./components/elements/OnBoarding/OnBoarding";

function App() {
  return (
    <Router>
        <Switch>
          <Container>
            <Grid container direction="column" justify="space-between" alignItems="center">
              <Route exact path='/'>
                <Onboarding/>
              </Route>

              <Route path='/register-dog'>
                <RegisterDog />
              </Route>

            </Grid>
          </Container>
        </Switch>
    </Router>
  );
}

export default App;
