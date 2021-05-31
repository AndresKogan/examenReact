import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { AgregarScreen } from '../views/AgregarScreen';
import HomeScreen from '../views/HomeScreen';
import { MoviesScreen } from '../views/MoviesScreen';

export const AppRouter = () => {

    return (

        <div className="container mt-2">
       <Router>
           <div>

         
           <Switch>
           <Route exact path="/" component={HomeScreen}/>
               <Route exact path="/moviesScreen" component={MoviesScreen}/>
               <Route exact path="/agregar" component={AgregarScreen}/>
           </Switch>
             </div>
       </Router>
       </div>
            
        
    )
}
