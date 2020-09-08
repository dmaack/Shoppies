import React, { useContext } from 'react';
import MovieItem from './MovieItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import ShoppiesContext from '../../context/shoppies/shoppiesContext';



const Movies = () => {
    const shoppiesContext = useContext(ShoppiesContext);

    const { loading, movies } = shoppiesContext

    console.log('movies in movies', shoppiesContext.movies)

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div>
                {movies.map(movie => (
                    <MovieItem key={movie.id} movie={movie} /> 
                ))}

             {/* <MovieItem key={movies.id} movies={movies} /> */}
               
            </div>
        )
    }

}



export default Movies;
