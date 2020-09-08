import React, { Fragment } from 'react';
import Search from '../movies/Search';
import Movies from '../movies/Movies';

const Home = () => {
    return (
        <Fragment>
            <Search />
            <Movies />
        </Fragment>
    )
}

export default Home;
