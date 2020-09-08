import React, { useContext } from 'react';
import NominationsContext from '../../context/nominations/nominationsContext';

const NominationItem = ({ nomination: { Poster, Title, Year, Genre, Plot, id}}) => {
    const nominationsContext = useContext(NominationsContext)
    const { removeNomination } = nominationsContext;

    const handleClick = () => {
        removeNomination(id)
    }
    return (
        <div className='nominationItem'>
            <div className='nomination-img'>
                <img 
                    src={Poster}
                    alt='movie poster'
                    className='movie-poster'
                />
            </div>
        
            <div className='nomination-details'>
                <div className='nomination-content'>
                    <h1 className='nomination-title'>{Title}</h1>
                    <p>{Year}</p>
                    <p>{Genre}</p>
                    <p>{Plot}</p>
                </div>
                <div>
                    <button onClick={handleClick} className='remove-btn'>Remove</button>
                </div>
            
            </div>
        </div>
    )
}

export default NominationItem
