import React , { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { useSelector , useDispatch} from "react-redux";
import { fetchUser } from './redux'



import RegisterDog from "./components/elements/RegisterDog/RegisterDog";
import OnBoarding from "./components/elements/OnBoarding/OnBoarding";
import Home from "./components/elements/Home/Home";
import AuthIndex from "./components/elements/Auth/AuthIndex";
import authServ from './services/auth.services'

// import BreedsDetails from "./components/elements/Home/Sections/Breeds/BreedsDetails";
// import Breed from "./components/elements/Breeds/Breeds";
// import BreedsDetails from "./components/elements/Breeds/BreedsDetails";
import "./App.css";


function App() {

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  
  useEffect(() => {
    // code to run on component mount
    authServ.loggedin()
    .then(userz => dispatch(fetchUser({...userz})))
    .then( x => console.log(x,'action redux'))
    .catch(err => console.log(err))
  }, [])
  
  
  console.log(user,'ESTO ES APP Y LO QUE HAY EN EL STORE')
  let loggedin = user.name

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
          {!loggedin ? <Redirect to="/auth" />:<Home /> }
        </Route>

        <Route path="/breed">
          {/* <Breed /> */}
        </Route>

        <Route path="/:breed">
          {/* <BreedsDetails /> */}
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
