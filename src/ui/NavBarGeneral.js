import React from 'react'
import { Nav, Navbar, NavLink } from 'react-bootstrap';


const NavBarGeneral = () => {

    return (
        <Navbar variant="dark" bg="dark" sticky="top">
            <Navbar.Brand href="/"><h1>Digital Movies</h1></Navbar.Brand>
            <Nav >
                <NavLink href="/moviesScreen"><h4> Peliculas </h4></NavLink>
                <NavLink href="/Agregar"><h4> Agregar </h4></NavLink>
                <NavLink href="/search"><h4> Search </h4></NavLink>
            </Nav>
        </Navbar>
    )
}

export default NavBarGeneral;