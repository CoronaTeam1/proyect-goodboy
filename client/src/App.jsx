import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import RegisterDog from "./components/elements/RegisterDog/RegisterDog";
import OnBoarding from "./components/elements/OnBoarding/OnBoarding";
import Home from "./components/elements/Home/Home";
import AuthIndex from "./components/elements/Auth/AuthIndex";
import Breed from "./components/elements/Breeds/Breeds";
import BreedsDetails from "./components/elements/Breeds/BreedsDetails";
import "./App.css";


function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <OnBoarding />
        </Route>

        <Route path="/register-dog">
          <RegisterDog />
        </Route>

        <Route path="/auth">
          <AuthIndex />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/breed">
          <Breed />
        </Route>

        <Route path="/breed-details">
          <BreedsDetails />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
