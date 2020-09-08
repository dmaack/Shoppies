import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NominationsContext from '../../context/nominations/nominationsContext';
import { GET_NOMINATIONS } from '../../context/types';


const NavBar = (props) => {
    const nominationsContext = useContext(NominationsContext)
    const { nominationCount, getNominations } = nominationsContext;

    useEffect(() => {
        getNominations()
    }, [])

        return (
            <nav class='nav'>
                <h1 className='app-title'>{props.title}</h1>

                <div className='container'>
                <ul className='navLinks'>
                    <li>  
                        <Link to='/'><i class="fas fa-film"></i>Movies</Link>
                    </li>
                    <li>
        <Link to='/nominations'><i class="fas fa-list"></i> My Nominations ({nominationCount})</Link>
                    </li>
                    <li>
                        {/* <Link to='/about'>About</Link> */}
                    </li>
                    
                </ul>
                </div>
            </nav>
        )

}

export default NavBar;
