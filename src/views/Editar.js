import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import getMovies from '../helpers/getMovies';
import postMovies from '../helpers/postMovies';
import Formulario from './Formulario';

const Editar = () => {

    //--------------Hooks----------------------

    const [formulario, setFormulario] = useState(null)
    const { id } = useParams();
    let history = useHistory()

    useEffect(() => {
        getMovies(`movies/detail/${id}`)
            .then(res => setFormulario(res[0]))
        // eslint-disable-next-line
    }, [])

    //--------------Logica----------------------

    const handleClick = () => {
        // history.goBack()
        history.go(-2)
    }

    const handleSubmit = async () => {
        postMovies(`update/${id}`, JSON.stringify(formulario))
        handleClick()
    }

    //--------------Returns----------------------

    if (formulario === null) {
        return (<Spinner animation="grow" />)
    }
    return (
        <div>
            <legend className="fw-bold">Editar Pelicula</legend>
            <form>
               
                <Formulario valorInicial={formulario} setFormulario={setFormulario} />
               
                <button className="btn btn-primary" type="button" onClick={handleSubmit}> Guardar </button>
                <button className="btn btn-success ml-1" type="button" onClick={handleClick}> Volver </button>
            </form >
        </div>

    )
}
export default Editar;