import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { getMovies } from '../helpers/getMovies';

const BorrarScreen = () => {

    const { id } = useParams()
    const [detalle, setdetalle] = useState(null)

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
        }
    }

    if (detalle === null) {
        return (<div></div>)
    }

    return (
        <div>

            Estas seguro de querer borrar esta película: {`${detalle.title} ???`}
            <button onClick={borrar}>Borrar</button>
        </div>
    )
}
export default BorrarScreen;