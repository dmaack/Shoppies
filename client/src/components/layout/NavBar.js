import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {

        return (
            <nav class='nav'>
                <h1 className='app-title'>{props.title}</h1>

                <div className='container'>
                <ul className='navLinks'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/nominations'>My Nominations</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    
                </ul>
                </div>
            </nav>
        )

}

export default NavBar;
