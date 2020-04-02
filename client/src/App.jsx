import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Container, Grid } from "@material-ui/core";

import RegisterDog from './components/elements/RegisterDog/RegisterDog'
import OnBoarding from "./components/elements/OnBoarding/OnBoarding";
import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
import AuthIndex from "./components/elements/Auth/AuthIndex";

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

              <Route path='/auth'>
                <AuthIndex/>
              </Route>
              
            </Grid>
          </Container>
        </Switch>
    </Router>
  );
}

export default App;
