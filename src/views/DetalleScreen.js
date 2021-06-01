import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { getMovies } from '../helpers/getMovies';

import Button from 'react-bootstrap/Button';
import BorrarScreen from './BorrarScreen';

const DetalleScreen = () => {

    const { id } = useParams();
    const [detalle, setdetalle] = useState(null)
    const [mostrarBorrar, setmostrarBorrar] = useState(false)

    let history = useHistory()

    useEffect(() => {
        getMovies(`detail/${id}`)
            .then(res => setdetalle(res[0]))
    }, [])


    const volver = () => {history.push("/moviesScreen/todas")}
    const borrar = () => {setmostrarBorrar(true)}

    if (detalle === null) {
        return (<div></div>)
    }

    return (
        <div>
            <p>Id: {detalle.id}</p>
            <p>Titulo: {detalle.title}</p>
            <p>Rating: {detalle.rating}</p>
            <p>Awards: {detalle.awards}</p>
            <p>Fecha de estreno: {detalle.release_date}</p>
            <p>Duracion: {detalle.length}</p>
            <p>Genero: {detalle.genre_id}</p>
            <button onClick={volver}>Volver</button>
            <button onClick={borrar}>Borrar</button>

            <BorrarScreen mostrar={mostrarBorrar} externalmostrarsetter={setmostrarBorrar}></BorrarScreen>   
        </div>
    )
}
export default DetalleScreen;
