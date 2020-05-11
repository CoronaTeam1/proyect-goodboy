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

  const userz = useSelector(state => state.user)
  const dispatch = useDispatch()



  useEffect( () => {
    // code to run on component mount
    // await authServ.loggedin()
    // .then(userz => dispatch(fetchUser({...userz})))
    // .then(x => user.username?setIsLogged(true):setIsLogged(false))
    // .then(console.log('Esta logeado?',isLogged))
    // .catch(() => setIsLogged(false))

    authServ.loggedin()
    .then(user => dispatch(fetchUser({...user})))
    // .then(x=>x.payload.username&&dispatch(fetchUser({...userz,isLogged:true})))
    .catch(()=> console.log('Error'))
    
    
  },[])
  
  
 

  return (
    <Router>
      <Switch>

        <Route exact path="/">
          {userz.isLogged ? <Redirect to="/home" />:<OnBoarding /> }
        </Route>

        <Route path="/auth">
          {userz.isLogged ? <Redirect to="/home" />:<AuthIndex /> }  
        </Route>

        <Route path="/register-dog">
          {userz.isLogged ? <Redirect to="/home" />:<RegisterDog /> }
        </Route>

        <Route path="/home">
          
          {userz.isLogged ? <Home />: <Redirect to="/auth" /> }
        </Route>

        <Route path="/breed/:breed">
          {userz.isLogged ?<BreedsDetails /> :<Redirect to="/auth" /> } 
        </Route>

        <Route path="/breed">
          {userz.isLogged ? <Breed />: <Redirect to="/auth" />}
        </Route>

        <Route path="/home-learn/:learn">
          {userz.isLogged ? <LearnDetails />:<Redirect to="/auth" /> }
        </Route>

        <Route path="/home-learn">
          {userz.isLogged ? <LearnInit />: <Redirect to="/auth" /> }
        </Route>

      </Switch>
    </Router>
  );
    
    
}

export default App;