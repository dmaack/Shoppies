import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ShoppiesContext from '../../context/shoppies/shoppiesContext';


const Search = (props) => {
    const shoppiesContext = useContext(ShoppiesContext);
    const [text, setText] = useState('')

    const onChange = e => {
        setText(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();
        shoppiesContext.searchMovies(text)
        setText('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type='text' 
                    name='text' 
                    value={text}
                    placeholder='Search...'
                    onChange={onChange} 
                    />
                <input 
                    type='submit' 
                    value='Search' 
                    />
            </form>

            {/* Might put in a clear button option */}
        </div>
    )
}

Search.propTypes = {  
    
}

export default Search;
