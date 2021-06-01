import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router'
import { getMovies } from '../helpers/getMovies';

export const Listas = ({ history }) => {



    const { lista } = useParams();

    const [movies, setMovies] = useState(null)

    useMemo(() => {
        if (lista === "todas") {
            getMovies("")
                .then(peliculas => {
                    setMovies(peliculas)
                })
        }
        else {
            getMovies(lista)
                .then(peliculas => {
                    setMovies(peliculas)
                })
        }
    }, [lista])


    const handleClick = ({ target }) => {
        history.push(target.id)
    }


    if (movies === null) {
        return <>
            <h1>Loading...</h1>
        </>
    }

    return (
        <div>
            <div className="row">
                <div className="col">

                    <legend className="fw-bold">Listado de {lista}</legend>
                    <ul >    {movies.map(movie =>

                        <li key={movie.id} style={{ fontSize: '12px' }}>
                            <a
                                href={`/movies/detail/${movie.id}`}>
                                {movie.title}

                            </a>
                        </li>)}


                    </ul>
                </div>
                <div className="col">
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="container">

                        <button className="btn btn-primary" id="Agregar" onClick={handleClick} >Agregar una Peliculas</button>
                        <br />
                        <br />
                        <button className="btn btn-success" id="/" onClick={handleClick}>Inicio</button>
                    </div>

                </div>
            </div>



        </div>
    )
}
