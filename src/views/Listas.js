import React, { useMemo, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { getMovies } from '../helpers/getMovies';

export const Listas = () => {


 const history = useHistory()
    const { lista } = useParams();
    

    const [movies, setMovies] = useState(null)

    useMemo(() => {
        switch (lista) {
            case "Todas":
                getMovies("movies")
                .then(peliculas => {
               
                    setMovies(peliculas)
                })
                break;
                case "Genero":
                  
                getMovies("genres/detail/")
                .then(peliculas => {
           
                    setMovies(peliculas)
                })
                break;
                case "Nuevas":
                getMovies("movies/new")
                .then(peliculas => {
                 
                    setMovies(peliculas)
                })
                break;
                case "Recomendadas":
                getMovies("movies/recommended")
                .then(peliculas => {
        
                    setMovies(peliculas)
                })
                break;
            default:
                getMovies(`genres/detail/${lista}`)
                .then(peliculas => {
           
                    setMovies(peliculas)
                })
                break;
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

                        <button className="btn btn-primary" id="/Agregar" onClick={handleClick} >Agregar una Peliculas</button>
                        <br />
                        <br />
                        <button className="btn btn-success" id="/" onClick={handleClick}>Inicio</button>
                    </div>

                </div>
            </div>



        </div>
    )
}
