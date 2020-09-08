import React, { useContext } from 'react';
import MovieItem from './MovieItem';
import Spinner from '../layout/Spinner';
import ShoppiesContext from '../../context/shoppies/shoppiesContext';



const Movies = () => {
    const shoppiesContext = useContext(ShoppiesContext);

    const { loading, movies } = shoppiesContext

    console.log('movies in Movies.js', shoppiesContext.movies)

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className='grid-4'>
                {movies.map(movie => (
                    <MovieItem key={movie.id} movie={movie} /> 
                ))}
            </div>
        )
    }

}



export default Movies;
