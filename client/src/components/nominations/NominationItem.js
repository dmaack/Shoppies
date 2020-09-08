import React, { useContext } from 'react';
import NominationsContext from '../../context/nominations/nominationsContext';

const NominationItem = ({ nomination: { Poster, Title, Year, id}}) => {
    const nominationsContext = useContext(NominationsContext)
    const { removeNomination } = nominationsContext;

    const handleClick = () => {
        removeNomination(id)
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
                    <button onClick={handleClick}>Remove Nomination</button>
                </div>
        </div>
    )
}

export default NominationItem
