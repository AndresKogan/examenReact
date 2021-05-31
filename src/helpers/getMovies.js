
export const getMovies = async (action) => {

    
    const url = `http://localhost:3001/${action}`;
    const resp = await fetch(url);
    const data  =   await  resp.json()


    const movies = data.map(movie => {

        return {

            id: movie.id,
        title: movie.title,
        rating: movie.rating,
        awards: movie.awards,
        release_date: movie.release_date,
        length: movie.length,
        genre_id: movie.genre_id


        }

    })

   return movies;
}