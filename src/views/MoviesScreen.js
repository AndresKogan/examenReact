import React, { useEffect, useState } from 'react'
import { getMovies } from '../helpers/getMovies'

export const MoviesScreen = ({history}) => {

    const [movies, setMovies] = useState(null)

    useEffect(() => {
        getMovies("movies")
            .then(peliculas => {
                setMovies(peliculas)
            })
    }, []);

    const handleClick = ({target}) => {

    history.push(target.id)

    }


    if (movies === null) {
        return <>
            <h1>Loading...</h1>
        </>
    }


    return (
<>



      
            <legend className="fw-bold">Listado de Peliculas</legend>
<button className="btn btn-primary" id="Agregar" onClick={handleClick} >Agregar una Peliculas</button>&nbsp;
<button className="btn btn-success" id="/" onClick={handleClick}>Inicio</button>

          <ul>    {movies.map(movie =>

                <li key={movie.id}>
                    <a

                        href={`/movies/detail/${movie.id}`}>
                        {movie.title}

                    </a>
                </li>)}

            <button ></button>
        </ul>
        </>
    )

}


