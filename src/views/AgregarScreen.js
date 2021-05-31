import React from 'react'

export const AgregarScreen = () => {
    return (
        <div>

            <legend className="fw-bold">Agregar Pelicula</legend>
            <label>Title</label>
                <input class="form-control form-control-sm" type="text"  />
                <label>Rating</label>
            <input class="form-control form-control-sm" type="number" />
            <label>Awards</label>
            <input class="form-control form-control-sm" type="number" />
            <label>Release Date</label>
            <input class="form-control form-control-sm" type="date"  />
            <label>Length</label>
            <input class="form-control form-control-sm" type="number" />


            <label>Genre</label><br/>
            <select class="custom-select">
                <option selected>-select genre-</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>


        </div>
    )
}
