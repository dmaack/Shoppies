import React, { useEffect, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ShoppiesContext from '../../context/shoppies/shoppiesContext';
import NominationsContext from '../../context/nominations/nominationsContext';


const Movie = (props) => {
    const shoppiesContext = useContext(ShoppiesContext);
    const { getMovie, loading, movie } = shoppiesContext;

    const nominationsContext = useContext(NominationsContext)
    const { addNomination } = nominationsContext
    

    const { Title, Year, Genre, Director, Actors, Plot, Poster, imdbRating, imdbID } = movie;
    console.log('movie props in Movie.js', movie)

    useEffect(() => {
        getMovie(props.match.params.imdbID)

        // eslint-disable-next-line
    }, []);

    const handleClick = () => {
        addNomination(imdbID)
    }

    return (
        <Fragment>
            <div className='back-btn-container'>
            <Link to='/' className='back-btn'>Back To Search</Link>
            </div>
            <div className='container'>
            
                <img src={Poster} alt='movie poster' className='movie-img' />
                <h1 className='movie-title'>{Title}</h1>
                <p className='movie-year'>{Year}</p>
                <p className='movie-genre'>{Genre}</p>
                <p className='movie-rating'>IMDB Rating: {imdbRating}</p>
                <p className='movie-actors'>Actors: {Actors}</p>
                <p className='movie-director'>Director: {Director}</p>
                <p className='movie-plot'>Plot: {Plot}</p>
                <button onClick={handleClick} className='btn'>Nominate Movie</button>
            </div>
        </Fragment>
    )
}


export default Movie;
