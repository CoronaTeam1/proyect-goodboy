import React , { useState,useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { useSelector , useDispatch} from "react-redux";
import { fetchUser } from './redux'



import RegisterDog from "./components/elements/RegisterDog/RegisterDog";
import OnBoarding from "./components/elements/OnBoarding/OnBoarding";
import Home from "./components/elements/Home/Home";
import AuthIndex from "./components/elements/Auth/AuthIndex";
import LearnDetails from './components/elements/Home/Sections/Learn/LearnDetails'
import BreedsDetails from "./components/elements/Home/Sections/Breeds/BreedsDetails";
import Breed from "./components/elements/Home/Sections/Breeds/Breeds";
import LearnInit from './components/elements/Home/Sections/Learn/LearnInit'
import SectionsLearn from "./components/elements/Home/Sections/Learn/SectionsLearn";

/* ----- Services ----- */
import authServ from './services/auth.services'
/* ----- Styles ----- */
import "./App.css";


function App() {

  const [isLogged, setIsLogged] = useState(false);

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  

  useEffect(async() => {
    // code to run on component mount
    authServ.loggedin()
    .then(user => dispatch(fetchUser({...user})))
    .then( x =>  x.payload.name?setIsLogged(true):setIsLogged(false))
    .catch(err => console.log(err))
    
  },[])
  
  
 

  return (
    <Router>
      <Switch>

        <Route exact path="/">
          {isLogged ? <Redirect to="/home" />:<OnBoarding /> }
        </Route>

        <Route path="/register-dog">
          {isLogged ? <Redirect to="/home" />:<RegisterDog /> }
        </Route>

        <Route path="/auth">
          {isLogged ? <Redirect to="/home" />:<AuthIndex /> }  
        </Route>

        <Route path="/home">
          
          {!user.isLogged ? <Redirect to="/auth" />:<Home /> }
        </Route>

        <Route path="/breed/:breed">
          {!isLogged ? <Redirect to="/auth" />:<BreedsDetails /> } 
        </Route>

        <Route path="/breed">
          {!isLogged ? <Redirect to="/auth" />:<Breed /> }
        </Route>

        <Route path="/init-learn/:learn">
          {!isLogged ? <Redirect to="/auth" />:<LearnDetails /> }
        </Route>

        <Route path="/init-learn">
          {!isLogged ? <Redirect to="/auth" />:<LearnInit /> }
        </Route>

      </Switch>
    </Router>
  );
    
    
}

export default App;