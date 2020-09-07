import React from 'react';

const MovieItem = (props) => {

    const { Title, Year, Poster  } = props.movies;

        return (
            <div style={{background: '#333333'}}>
                <img 
                    src={Poster}
                    alt='movie poster'
                    className='movie-poster'
                    style={{width: '60px'}} />
                    <h1>{Title}</h1>
                    <h2>{Year}</h2>
            </div>
        )
};

export default MovieItem;
