import React , { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { useSelector , useDispatch} from "react-redux";
import { fetchUser } from './redux'



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

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  let loggedin
  
  useEffect(() => {
    // code to run on component mount
    authServ.loggedin()
    .then(userz => dispatch(fetchUser({...userz})))
    .then( x => loggedin=x.payload.username)
    .then( y => console.log(loggedin))
    .catch(err => console.log(err))
  }, [])
  
  
 

  return (
    <Router>
      <Switch>

        <Route exact path="/">
          {loggedin ? <Redirect to="/home" />:<OnBoarding /> }
        </Route>

        <Route path="/register-dog">
          {loggedin ? <Redirect to="/home" />:<RegisterDog /> }
        </Route>

        <Route path="/auth">
          {loggedin ? <Redirect to="/home" />:<AuthIndex /> }  
        </Route>

        <Route path="/home">
          {loggedin ? <Redirect to="/auth" />:<Home /> }
        </Route>

        <Route path="/breed/:breed">
          {loggedin ? <Redirect to="/auth" />:<BreedsDetails /> } 
        </Route>

        <Route path="/breed">
          {loggedin ? <Redirect to="/auth" />:<Breed /> }
        </Route>

        <Route path="/init-learn/:learn">
          {loggedin ? <Redirect to="/auth" />:<LearnDetails /> }
        </Route>

        <Route path="/init-learn">
          {loggedin ? <Redirect to="/auth" />:<LearnInit /> }
        </Route>

      </Switch>
    </Router>
  );
    
    
}

export default App;