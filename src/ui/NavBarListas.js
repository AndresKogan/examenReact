import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

const NavBarListas = ({ generos }) => {

 



    return (


        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink

                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="Todas"
                    >
                        Todas
                            </NavLink>
                    <NavLink
                    
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="Nuevas"
                    >
                        Nuevas
                            </NavLink>
                    <NavLink
                       
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="Recomendadas"
                    >
                        Recomendadas
                            </NavLink>



                    <NavDropdown title="Por Generos" id="basic-nav-dropdown">
                        {generos.map(genero => (

                            <NavDropdown.Item
                                key={genero.id}
                                href={`${genero.id}`}>
                                {genero.name}
                            </NavDropdown.Item>
                        ))}

                        <NavDropdown.Divider />
                        <NavDropdown.Item href="">Todos Los generos</NavDropdown.Item>
                    </NavDropdown>




                </div>
            </div>

        </nav>

    )
}

export default NavBarListas;