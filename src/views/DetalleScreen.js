import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getMovies } from '../helpers/getMovies';

const DetalleScreen = () => {

    const { id } = useParams();
    const [detalle, setdetalle] = useState(null)

    useEffect(() => {
        getMovies(`movies/detail/${id}`)
            .then(res => setdetalle(res[0]))
    }, [])


    if (detalle === null) {
        return (<div></div>)
    }

    return (
        <div>
            {JSON.stringify(detalle)}
            {`Detalle Pelicula: ${id}`}
        </div>
    )
}
export default DetalleScreen;
