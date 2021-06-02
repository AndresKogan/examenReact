import React, { useEffect, useState } from 'react'
import { Spinner, ToggleButton, ButtonGroup, Dropdown, Button } from 'react-bootstrap';
import getGeneros from '../helpers/getGeneros';

import Listas from './Listas';

const MoviesScreen = () => {

    const [generos, setGeneros] = useState(null)
    const [filtro, setfiltro] = useState(
        {
            porCategoria: '',
            porGenero: ''
        }
    )

    const categorias = ["Todas", "Nuevas", "Recomendadas"];

    useEffect(() => {
        getGeneros().then((elementos) => setGeneros(elementos))
    }, []);

    if (generos === null) {
        return (<Spinner animation="grow" />)
    }

    return (
        <div>
            <ButtonGroup toggle>
                {categorias.map((categoria, idx) => (
                    <ToggleButton key={idx} type="radio" variant="primary"
                        name={categoria}
                        checked={filtro.porCategoria === categoria}
                        onChange={(e) => setfiltro({...filtro, porCategoria: e.currentTarget.name })}>
                        {categoria}
                    </ToggleButton>
                ))}
            </ButtonGroup>

            <Dropdown as={ButtonGroup}>
                <Button variant="success">{generos.map(genero => genero.name).includes(filtro.porGenero) ? filtro.porGenero : "Generos"}</Button>
                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                <Dropdown.Menu>
                    {
                        generos.map((genero, idx) => (
                            <Dropdown.Item key={idx} eventKey={genero.id}
                                name={genero.name}
                                active={filtro.porGenero === genero.name}
                                onClick={(e) => setfiltro({...filtro, porGenero: e.currentTarget.name })}
                            >
                                { genero.name}
                            </Dropdown.Item>))
                    }
                    <Dropdown.Divider></Dropdown.Divider>
                    <Dropdown.Item key="0"
                        name="Todos los generos"
                        onClick={(e) => setfiltro({...filtro, porGenero: e.currentTarget.name })}>
                        Todos Los Generos
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Listas filtro={filtro} generos={generos}/>
        </div >
    )


}
export default MoviesScreen;

