import React from 'react'
import { Switch, Route } from "react-router-dom";
import NavBarGeneral from '../ui/NavBarGeneral';

import AgregarScreen from '../views/AgregarScreen';
import BorrarScreen from '../views/BorrarScreen';
import DetalleScreen from '../views/DetalleScreen';
import EditarScreen from '../views/EditarScreen';
import HomeScreen from '../views/HomeScreen';
import MoviesScreen from '../views/MoviesScreen';

export const AppRouter = () => {

    return (
        <div>
            <NavBarGeneral />
            <div className="ml-5 mr-5 mt-5">
                <Switch>
                    <Route exact path="/moviesScreen/" component={MoviesScreen} />
                    <Route exact path="/moviesScreen/:lista" component={MoviesScreen} />
                    <Route exact path="/moviesScreen/Genero/:id" component={MoviesScreen} />
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/agregar" component={AgregarScreen} />
                    <Route exact path="/movies/detail/:id" component={DetalleScreen} />
                    <Route exact path="/movies/delete/:id" component={BorrarScreen} />
                    <Route exact path="/movies/edit/:id" component={EditarScreen} />
                </Switch>
            </div>
        </div>
    )
}
