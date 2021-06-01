import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

import { getMovies } from '../helpers/getMovies'
import NavBarListas from '../ui/NavBarListas';
import { Listas } from './Listas';

const MoviesScreen = () => {

    const { lista } = useParams();
console.log("cargo")

    return (

        <div>
            <NavBarListas />
            <Listas lista={lista} />
            </div>

    )

}
export default MoviesScreen;

