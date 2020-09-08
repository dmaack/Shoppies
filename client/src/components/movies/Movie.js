import React, { useEffect, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShoppiesContext from '../../context/shoppies/shoppiesContext';

const Movie = (props) => {
    const shoppiesContext = useContext(ShoppiesContext);
    
    const { getMovie, loading, movie } = shoppiesContext;

    const { Title, Year, Genre, Director, Actors, Plot, Poster, imdbRating } = movie;
    console.log('movie props in Movie.js', movie)

    useEffect(() => {
        getMovie(props.match.params.imdbID)

        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <Link to='/'>Back To Search</Link>
            <div>
                <img src={Poster} alt='movie poster' />
                <h1>{Title}</h1>
                <p>{Year}</p>
                <p>{Genre}</p>
                <p>{imdbRating}</p>
                <p>{Actors}</p>
                <p>{Director}</p>
                <p>{Plot}</p>
            </div>
        </Fragment>
    )
}


export default Movie;
