import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import HomeScreen from '../views/HomeScreen';
import { MoviesScreen } from '../views/MoviesScreen';

export const AppRouter = () => {

    return (

        <div className="container mt-2">
       <Router>
           <div>

         
           <Switch>
           <Route exact path="/" component={HomeScreen}/>
               <Route exact path="/movies" component={MoviesScreen}/>
           </Switch>
             </div>
       </Router>
       </div>
            
        
    )
}
