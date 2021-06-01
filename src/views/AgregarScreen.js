import React, { useEffect, useState } from 'react'
import { useForm } from '../customHooks/useForm';

const AgregarScreen = ({ history }) => {

    const [generos, setGeneros] = useState([])



    useEffect(() => {
        cargaGenero()
            .then((elementos) => setGeneros(elementos))
    }, []);

    const [formValues, handleInputChange, reset] = useForm({

    });

    const {
        title,
        rating,
        awards,
        release_date,
        length,
        genre_id } = formValues;


    const cargaGenero = async () => {
        console.log("aca")
        const url = `http://localhost:3001/movies/add`;

        const resp = await fetch(url);
console.log(resp)
        const data = await resp.json()
console.log(data)
        return data;
    }

    const handleClick = async (e) => {
 
       
         history.push("/")
    }



    if (generos === null) {
        return (
            <h1>Loading....</h1>
        )
    }


    return (
        <div>

            <legend className="fw-bold">Agregar Pelicula</legend>
            <form action="http://localhost:3001/movies/create" method="Post">
                <label>Title</label>
                <input
                    className="form-control form-control-sm"
                    type="text"
                    name="title"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />
                <label>Rating</label>
                <input
                    className="form-control form-control-sm"
                    type="number"
                    name="rating"
                    autoComplete="off"
                    value={rating}
                    onChange={handleInputChange}
                />
                <label>Awards</label>
                <input
                    className="form-control form-control-sm"
                    type="number"
                    name="awards"
                    autoComplete="off"
                    value={awards}
                    onChange={handleInputChange}
                />
                <label>Release Date</label>
                <input
                    className="form-control form-control-sm"
                    type="date"
                    name="release_date"
                    autoComplete="off"
                    value={release_date}
                    onChange={handleInputChange} />
                <label>Length</label>
                <input
                    className="form-control form-control-sm"
                    type="number"
                    name="length"
                    autoComplete="off"
                    value={length}
                    onChange={handleInputChange}
                />

                <label>Genre</label><br />
                <select
                    className="custom-select"
                    name="genre_id"
                    autoComplete="off"
                    value={genre_id}
                    onChange={handleInputChange}
                >
                    <option defaultValue>-select genre-</option>
                    {
                        generos.map((genero, i) =>
                            <option
                                key={i}
                                value={genero.id}
                            >
                                {genero.name}
                            </option>
                        )}
                </select>
                <br />
                <br />
                <button className="btn btn-primary" id="agregar" type="submit" >Agregar una Pelicula</button>&nbsp;
            <button className="btn btn-success" id="/" onClick={handleClick}>Inicio</button>
            </form >
        </div>

    )
}
export default AgregarScreen;