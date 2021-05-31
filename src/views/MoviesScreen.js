import React, { useEffect, useState } from 'react'
import { getMovies } from '../helpers/getMovies'

export const MoviesScreen = () => {

    const [movies, setMovies] = useState(null)

    useEffect(() => {
        getMovies("movies")
            .then(peliculas => {
                setMovies(peliculas)
            })
    }, []);


    
    if (movies === null) {
        return <>
            <h1>Loading...</h1>
        </>
    }


    return (
        <ul>
            <legend className="fw-bold">Listado de Peliculas</legend>

            {movies.map(movie =>

                <li          key={movie.id}>
                    <a
               
                        href={`/movies/detail/${movie.id}`}>
                        {movie.title}
               
                </a>
                </li>)}

            <button ></button>
        </ul>
    )

}


