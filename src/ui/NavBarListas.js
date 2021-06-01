import React from 'react'
import { NavLink } from 'react-router-dom';


const NavBarListas = () => {

    const validGrupos = ['new', 'recommended', 'todas'];

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


                    </div>
                </div>

            </nav>

    )
}

export default NavBarListas;