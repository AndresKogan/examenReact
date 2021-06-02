import React, { useEffect, useState } from 'react'
//import { useForm } from '../customHooks/useForm';
import Formulario from './Formulario';

const EditarScreen = ({ history }) => {

    const handleClick = () => { return (<div></div>) }

    return (
        <div>
            <legend className="fw-bold">Editar Pelicula</legend>
            <form action="http://localhost:3001/movies/update" method="Post">
                <Formulario />
            <button className="btn btn-primary" id="editar" type="submit" >Editar una Pelicula</button>
            <button className="btn btn-success ml-1" id="/" onClick={handleClick}>Inicio</button>
            </form >
        </div>

    )
}
export default EditarScreen;