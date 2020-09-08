import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NominationsContext from '../../context/nominations/nominationsContext';


const MovieItem = (props) => {
    const nominationsContext = useContext(NominationsContext)
    const { addNomination } = nominationsContext

    const { Title, Year, Poster, imdbID  } = props.movie;

    console.log('props in MovieItem.js', props.movie)

    const handleClick = () => {
        addNomination(imdbID)
    }

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
                    <button onClick={handleClick}>Nominate Movie</button>
                </div>
                

            </div>
        )
};

export default MovieItem;
