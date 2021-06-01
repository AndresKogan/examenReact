import React from 'react'
import { Link, NavLink } from 'react-router-dom';




const NavBarGeneral = () => {

    return (
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Digital Movies
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/moviesScreen/Todas"
                    >
                        Listado Peliculas
                    </NavLink>

            
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

        </nav>
    )
      

}

export default NavBarGeneral;