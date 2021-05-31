import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { getMovies } from '../helpers/getMovies';

const BorrarScreen = () => {
    
    const {id} = useParams()
    const [detalle, setdetalle] = useState(null)
    let history = useHistory()

    useEffect(() => {
        getMovies(`movies/detail/${id}`)
            .then(res => setdetalle(res[0]))
    }, [])

     const borrar = null


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