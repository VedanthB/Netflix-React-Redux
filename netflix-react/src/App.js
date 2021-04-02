import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
import { auth } from './firebase';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

   useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user)  {
          // the user is logged in
           dispatch(
             login({
               displayName: user.displayName,
               email: user.email,
               photoUrl: user.photoURL,
           })
           )
        }

      })
   }, [dispatch])

  return (
    <div className="app">
        <Router>
          {!user ? (
           <LoginScreen />
         ) : (
           <Switch>
             <Route exact path="/profile" >
               <ProfileScreen />
             </Route>
           <Route exact path="/">
              <HomeScreen />
           </Route>
         </Switch>
         ) }
      </Router>
    </div>
  );
}

export default App;
