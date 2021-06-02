import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import postMovies from '../helpers/postMovies';
import Formulario from './Formulario';

const AgregarScreen = () => {

    //--------------Hooks----------------------

    const [formulario, setFormulario] = useState(null)
    const { id } = useParams();
    let history = useHistory()

    //--------------Logica----------------------

    const handleClick = () => {
        history.push(`/movies/detail/${id}`)
    }

    const handleSubmit = async () => {
        console.log(formulario)
        postMovies(`create/`, JSON.stringify(formulario))
        history.push("/moviesScreen/")
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
export default AgregarScreen;