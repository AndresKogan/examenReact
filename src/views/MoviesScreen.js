import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import NavBarListas from '../ui/NavBarListas';
import { Listas } from './Listas';

const MoviesScreen = () => {

    const { lista } = useParams();

    const [generos, setGeneros] = useState(null)


    useEffect(() => {
        cargaGenero()
            .then(
                (elementos) => setGeneros(elementos))
    }, []);


    const cargaGenero = async () => {

        const url = `http://localhost:3001/genres`;
        const resp = await fetch(url);
        const data = await resp.json()

        return data;
    }

    if(generos===null){
        return (<h1>Loading...</h1>)
    }

else {
     return (

        <div>
            <NavBarListas generos = {generos} />
            <Listas lista={lista} />
        </div>

    )
}
   

}
export default MoviesScreen;

