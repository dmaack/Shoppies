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
            <div className='container movieItem'>
                <img 
                    src={Poster}
                    alt='movie poster'
                    className='movie-poster'
                     />
                <h1 className='movie-item-title'>{Title}</h1>
                <p className='movie-item-year'>{Year}</p>
                <div className='movie-btn-container'>
                    <Link to={`/movie/${imdbID}`} className='movie-details'>Details</Link>
                    <button onClick={handleClick} className='nominate-btn'>Nominate Movie</button>
                </div>
                

            </div>
        )
};

export default MovieItem;
