import React from 'react';
import { Link } from 'react-router-dom'

const MovieItem = (props) => {

    const { Title, Year, Poster, imdbID  } = props.movie;

    console.log('props in movieItem', props.movie)

        return (
            <div>
                <img 
                    src={Poster}
                    alt='movie poster'
                    className='movie-poster'
                    style={{width: '60px'}} />
                <h1>{Title}</h1>
                <h2>{Year}</h2>
                <div>
                    <Link to={`/movie/${imdbID}`}>Details</Link>
                </div>
                

            </div>
        )
};

export default MovieItem;
