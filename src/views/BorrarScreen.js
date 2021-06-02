import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { getMovies } from '../helpers/getMovies';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

const BorrarScreen = ({ externalmostrarsetter, mostrar, detalle }) => {

    const { id } = useParams()
    const handleClose = () => externalmostrarsetter(false);
    let history = useHistory()

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
            history.push("/moviesScreen/Todas");
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
                <Modal.Body>Estas seguro de querer borrar esta película? <br /> <b>{`${detalle.title}`}</b></Modal.Body>
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