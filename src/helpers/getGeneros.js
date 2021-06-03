const getGeneros = async () => {

    const url = `http://localhost:3001/movies/add`;
    const resp = await fetch(url);
    const data = await resp.json()

    const generos = data.map(genero => {

        return {

            id: genero.id,
            name: genero.name,
            ranking: genero.ranking,
            active: genero.active,

        }

    })
    // console.log(generos)
    return (generos)
}

export default getGeneros
