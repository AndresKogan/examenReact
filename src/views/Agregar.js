import React, {  useState } from 'react'

import { useHistory } from 'react-router';
import postMovies from '../helpers/postMovies';
import Formulario from './Formulario';

const Agregar = () => {

    //--------------Hooks----------------------
    const [formulario, setFormulario] = useState(null)
    let history = useHistory()

    //--------------Logica----------------------

    const handleClick = () => {
        // history.goBack()
        history.go(-2) 
    }

    const handleSubmit = async () => {
        postMovies(`create/`, JSON.stringify(formulario))
        handleClick()
    }

    //--------------Returns----------------------

    return (
        <div>
            <legend className="fw-bold">Agregar Pelicula</legend>
            <form>

                <Formulario formulario={formulario} setFormulario={setFormulario} />

                <button className="btn btn-primary" type="button" onClick={handleSubmit}> Guardar </button>
                <button className="btn btn-success ml-1" type="button" onClick={handleClick}> Volver </button>
            </form >
        </div>

    )
}
export default Agregar;