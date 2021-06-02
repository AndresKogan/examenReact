import React, { useMemo, useState } from 'react'
import queryString from 'query-string';
import { useForm } from '../customHooks/useForm'
import getMovies from '../helpers/getMovies'
import { useLocation } from 'react-router';
import { ListGroup } from 'react-bootstrap';

export const SearchScreen = ({ history }) => {

    const [movies, setMovies] = useState(null)
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);



        
        useMemo(() =>  getMovies("movies")
        .then(peliculas => { setMovies(peliculas) }), []);


    const moviesFiltradas  = ( titulo  , peliculas) => {
     
        if (titulo === '') {
            return [0]
        }

        titulo = titulo.toLocaleLowerCase();
     
        if( peliculas!== null){
        return   peliculas.filter(movie => movie.title.toLocaleLowerCase().includes(titulo))}
    }
  

const peliculas = moviesFiltradas(q,movies)



const [formValues, handleInputChange] = useForm({
    searchText: ''
});

const { searchText } = formValues;

const handleSearch = (e) => { 
  e.preventDefault()
    history.push(`?q=${searchText}`)
  
}


if (peliculas===undefined || movies=== null){
    return <h1>Loading...</h1>
}

return (
    <div>
        <h1>Search Screen</h1>
        <hr />

        <div className="row">

            <div className="col-5">
                <h4> Search Form </h4>
                <hr />

                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Find your pelicula"
                        className="form-control"
                        autoComplete="off"
                        name="searchText"
                        value={searchText}
                        onChange={handleInputChange}
                    />

                    <button
                        type="submit"
                        className="btn m-1 btn-block btn-outline-primary"
                    >
                        Search...
                    </button>


                </form>

            </div>

            <div className="col-7">

                <h4> Results </h4>
                <hr />

                {
                    (q === '')
                    &&
                    <div className="alert alert-info">
                       Busque una pelicula

                </div>
                }
                {
                    (q !== '' && peliculas.length === 0)
                    &&
                    <div className="alert alert-danger">
                       no hay peliculas con {q}

                    </div>
                }
                <ListGroup>
                    {
                        (peliculas.length !== 0 && peliculas[0].id !== undefined)
                        &&
                        peliculas.map(movie => (
                            <ListGroup.Item 
                            key={movie.id} 
                            action href={`/movies/detail/${movie.id}`}>
                                {movie.title}
                            </ListGroup.Item>

                        ))

                    }
                </ListGroup>
            </div>

        </div>
    </div >
)

}
