import React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";
import NavBarGeneral from '../ui/NavBarGeneral';

import AgregarScreen from '../views/AgregarScreen';
import BorrarScreen from '../views/BorrarScreen';
import DetalleScreen from '../views/DetalleScreen';
import HomeScreen from '../views/HomeScreen';

import MoviesScreen from '../views/MoviesScreen';

export const AppRouter = () => {

    return (




        <>
            <NavBarGeneral />
            <div className="container mt-2">


                <div>
                    <Switch>

                        <Route exact path="/moviesScreen/" component={MoviesScreen} />
                        <Route exact path="/moviesScreen/:lista" component={MoviesScreen} />
                        <Route exact path="/" component={HomeScreen} />
                        <Route exact path="/agregar" component={AgregarScreen} />
                        <Route exact path="/movies/detail/:id" component={DetalleScreen} />
                        <Route exact path="/movies/delete/:id" component={BorrarScreen} />




                    </Switch>
                </div>
                {/* </Router> */}
            </div>

        </>

    )
}
