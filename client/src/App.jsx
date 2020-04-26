import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import RegisterDog from "./components/elements/RegisterDog/RegisterDog";
import OnBoarding from "./components/elements/OnBoarding/OnBoarding";
import Home from "./components/elements/Home/Home";
import AuthIndex from "./components/elements/Auth/AuthIndex";
<<<<<<< HEAD
import Breed from "./components/elements/Home/Sections/Breeds/Breeds";
=======
>>>>>>> ebb441adfbab13fc5369c31914aff54dcaca9801
import BreedsDetails from "./components/elements/Home/Sections/Breeds/BreedsDetails";
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

        <Route path="/:breed">
          <BreedsDetails />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
