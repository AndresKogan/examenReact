import React from 'react'

const AgregarScreen = () => {
    return (
        <div>

            <legend className="fw-bold">Agregar Pelicula</legend>
            <label>Title</label>
                <input className="form-control form-control-sm" type="text"  />
                <label>Rating</label>
            <input className="form-control form-control-sm" type="number" />
            <label>Awards</label>
            <input className="form-control form-control-sm" type="number" />
            <label>Release Date</label>
            <input className="form-control form-control-sm" type="date"  />
            <label>Length</label>
            <input className="form-control form-control-sm" type="number" />

            <label>Genre</label><br/>
            <select className="custom-select">
                <option defaultValue>-select genre-</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

        </div>
    )
}
export default AgregarScreen;