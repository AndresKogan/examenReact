import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

const NavBarListas = () => {
    const validGrupos = ['Nuevas', 'Recomendadas', 'Todas'];

    const [generos, setGeneros] = useState([])


    useEffect(() => {
        cargaGenero()
            .then(
                (elementos) => setGeneros(elementos))
    }, []);


    const cargaGenero = async () => {

        const url = `http://localhost:3001/genres`;
        const resp = await fetch(url);
        const data = await resp.json()

        return data;
    }

    if (generos === []) {
        return <h1>
            loading....
        </h1>
    }

    console.log(generos)




    return (


        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    {
                        validGrupos.map(grupo => (
                            <NavLink
                                key={grupo}
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to={`${grupo}`}
                            >
                                {grupo}
                            </NavLink>))
                    }

                    <NavDropdown title="Por Generos" id="basic-nav-dropdown">
                        {generos.map(genero => {
                            <NavDropdown.Item href={`/moviesScreen/genres/detail/${genero.id}`}>{genero.name}</NavDropdown.Item>
                        })}

                        <NavDropdown.Divider />
                        <NavDropdown.Item href="">Todos Los generos</NavDropdown.Item>
                    </NavDropdown>




                </div>
            </div>

        </nav>

    )
}

export default NavBarListas;