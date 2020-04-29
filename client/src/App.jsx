import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useSelector } from "react-redux";


import RegisterDog from "./components/elements/RegisterDog/RegisterDog";
import OnBoarding from "./components/elements/OnBoarding/OnBoarding";
import Home from "./components/elements/Home/Home";
import AuthIndex from "./components/elements/Auth/AuthIndex";
<<<<<<< HEAD
import BreedsDetails from './components/elements/Home/Sections/Breeds/BreedsDetails'
import Breeds from './components/elements/Home/Sections/Breeds/Breeds'

// import BreedsDetails from "./components/elements/Breeds/BreedsDetails";
=======
import authServ from './services/auth.services'

import BreedsDetails from "./components/elements/Home/Sections/Breeds/BreedsDetails";
import Breed from "./components/elements/Home/Sections/Breeds/Breeds";
import LearnInit from './components/elements/Home/Sections/Learn/LearnInit'
>>>>>>> 243c4508bfafb7f802b98a8735bb5521e4579acd
import "./App.css";


function App() {

    const userRedux = {
        name: useSelector(state => state.user.name),
        username: useSelector(state => state.user.username),
        password: useSelector(state => state.user.password),
        checkPassword: useSelector(state => state.user.checkPassword)
    };

    console.log(authServ.loggedin(), 'logedin')

    console.log(userRedux, 'ESTO ES APP Y LO QUE HAY EN EL STORE')
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

<<<<<<< HEAD
        <Route path="/breed">
          <Breeds />
        </Route>

        <Route path="/:breed">
          <BreedsDetails />
        </Route>
=======
                
                <Route path="/breed/:breed">
                    <BreedsDetails />
                </Route>

                <Route path="/init-learn">
                    <LearnInit />
                </Route>
>>>>>>> 243c4508bfafb7f802b98a8735bb5521e4579acd

            </Switch>
        </Router>
    );
}

export default App;