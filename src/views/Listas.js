import React, { useMemo, useState } from 'react'
import { ListGroup, Spinner } from 'react-bootstrap';
import getMovies from '../helpers/getMovies';

const Listas = ({ filtro, generos }) => {

    const [movies, setMovies] = useState(null)

    useMemo(() => {
        switch (filtro.porCategoria) {

            case "Nuevas":
                getMovies("movies/new")
                    .then(peliculas => { setMovies(peliculas) })
                break;
            case "Recomendadas":
                getMovies("movies/recommended")
                    .then(peliculas => { setMovies(peliculas) })
                break;
            default:
            case "Todas":
                getMovies("movies")
                    .then(peliculas => { setMovies(peliculas) })
                break;
        }

    }, [filtro])


    if (movies === null | generos === undefined) {
        return (<Spinner animation="grow" />)
    }
    

    // const filtro_genero_id = generos.filter(genero => genero.name === filtro.porGenero)[0].id
    const filtro_genero = generos.find(genero=>genero.name === filtro.porGenero) 
 
    const movies_filtradas = filtro_genero != null ? movies.filter(movie => movie.genre_id === filtro_genero.id) : movies

    return (
        <div >
            <hr />
            <ListGroup>
                {movies_filtradas.map(movie =>
                    <ListGroup.Item key={movie.id} action href={`/movies/detail/${movie.id}`}>
                        {movie.title}
                    </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    )
}

export default Listas;