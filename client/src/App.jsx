import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useSelector } from "react-redux";


import RegisterDog from "./components/elements/RegisterDog/RegisterDog";
import OnBoarding from "./components/elements/OnBoarding/OnBoarding";
import Home from "./components/elements/Home/Home";
import AuthIndex from "./components/elements/Auth/AuthIndex";
import authServ from './services/auth.services'

import LearnDetails from './components/elements/Home/Sections/Learn/LearnDetails'
import BreedsDetails from "./components/elements/Home/Sections/Breeds/BreedsDetails";
import Breed from "./components/elements/Home/Sections/Breeds/Breeds";
import LearnInit from './components/elements/Home/Sections/Learn/LearnInit'
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

                <Route path="/breed/:breed">
                    <BreedsDetails />
                </Route>
                
                <Route path="/breed">
                    <Breed />
                </Route>

<<<<<<< HEAD

                <Route path="/breed/:breed">
                    <BreedsDetails />
=======
                <Route path="/init-learn/:learn">
                    <LearnDetails />
>>>>>>> a6ab8f3e2eae5120f8af5695f243675f873d913d
                </Route>

                <Route path="/init-learn">
                    <LearnInit />
                </Route>
<<<<<<< HEAD
=======

>>>>>>> a6ab8f3e2eae5120f8af5695f243675f873d913d

            </Switch>
        </Router>
    );
}

export default App;