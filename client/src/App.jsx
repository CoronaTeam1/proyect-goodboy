
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/* ----- RRD components ----- */
import RegisterDog from "./components/elements/RegisterDog/RegisterDog";
import OnBoarding from "./components/elements/OnBoarding/OnBoarding";
import Home from "./components/elements/Home/Home";
import AuthIndex from "./components/elements/Auth/AuthIndex";
import LearnDetails from './components/elements/Home/Sections/Learn/LearnDetails'
import BreedsDetails from "./components/elements/Home/Sections/Breeds/BreedsDetails";
import Breed from "./components/elements/Home/Sections/Breeds/Breeds";
import LearnInit from './components/elements/Home/Sections/Learn/LearnInit'
import SectionsLearn from "./components/elements/Home/Sections/Learn/SectionsLearn";
/* ----- Styles ----- */
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

                <Route path="/home-learn">
                    <SectionsLearn />
                </Route>

                <Route path="/breed/:breed">
                    <BreedsDetails />
                </Route>

                <Route path="/breed">
                    <Breed />
                </Route>

                <Route path="/init-learn/:learn">
                    <LearnDetails />
                </Route>

                <Route path="/init-learn">
                    <LearnInit />
                </Route>

            </Switch>
        </Router>
    );
}

export default App;