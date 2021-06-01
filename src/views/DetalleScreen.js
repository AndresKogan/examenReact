import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { getMovies } from '../helpers/getMovies';

import Button from 'react-bootstrap/Button';
import BorrarScreen from './BorrarScreen';
import Table from 'react-bootstrap/Table';

const DetalleScreen = () => {

    const { id } = useParams();
    const [detalle, setdetalle] = useState(null)
    const [mostrarBorrar, setmostrarBorrar] = useState(false)

    let history = useHistory()

    useEffect(() => {
        getMovies(`movies/detail/${id}`)
            .then(res => setdetalle(res[0]))
    }, [])


    const volver = () => { history.push("/moviesScreen/todas") }
    const borrar = () => { setmostrarBorrar(true) }

    if (detalle === null) {
        return (<div></div>)
    }

    return (
        <div>

            <Table  responsive  striped bordered hover size="sm" >
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>{detalle.id}</td>
                    </tr>
                    <tr>
                        <td>Titulo</td>
                        <td>{detalle.title}</td>
                    </tr>
                    <tr>
                        <td>Rating</td>
                        <td>{detalle.rating}</td>
                    </tr>
                    <tr>
                        <td>Awards</td>
                        <td>{detalle.awards}</td>
                    </tr>
                    <tr>
                        <td>Fecha de estreno</td>
                        <td>{detalle.release_date}</td>
                    </tr>
                    <tr>
                        <td>Duracion</td>
                        <td>{detalle.length}</td>
                    </tr>
                    <tr>
                        <td>Genero</td>
                        <td>{detalle.genre_id}</td>
                    </tr>
                </tbody>
            </Table>

            <Button className="float-left ml-1" variant="primary" onClick={volver}>
                Volver
            </Button>
            <Button className="float-left ml-1" variant="secondary" onClick={borrar}>
                Borrar
            </Button>
            <BorrarScreen mostrar={mostrarBorrar} externalmostrarsetter={setmostrarBorrar} detalle={detalle}></BorrarScreen>
        </div>
    )
}
export default DetalleScreen;
