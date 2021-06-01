import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { getMovies } from '../helpers/getMovies';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

const BorrarScreen = ({ externalmostrarsetter, mostrar }) => {

    const { id } = useParams()
    const [detalle, setdetalle] = useState(null)
    const handleClose = () => externalmostrarsetter(false);
    let history = useHistory()

    useEffect(() => {
        getMovies(`movies/detail/${id}`)
            .then(res => setdetalle(res[0]))
    }, [])

    const borrar = async () => {
        const response = await fetch(`http://localhost:3001/movies/update/${id}`, {
            method: "POST",
            body: new URLSearchParams({
                'title': detalle.title + " BORRADO",
                'rating': detalle.rating,
                'awards': detalle.awards,
                'release_date': detalle.release_date,
                'length': detalle.length,
                'genre_id': detalle.genre_id
            })
        })

        if (!response.ok) {
            console.log('Error al modificar la pelicula')
        } else {
            history.push("/moviesScreen/todas");
        }
    }

    if (detalle === null) {
        return (<div></div>)
    }

    return (
        <>
            <Modal show={mostrar} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Borrado Logico</Modal.Title>
                </Modal.Header>
                <Modal.Body>Estas seguro de querer borrar esta película? <br/> <b>{`${detalle.title}`}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                    <Button variant="danger" onClick={borrar}>
                        Borrar
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
export default BorrarScreen;