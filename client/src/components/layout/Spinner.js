import React, { Fragment } from 'react';
import spinner from './spinner.gif';
import loader from './loading-78.gif';


const Spinner = () => {
    return (
        <Fragment>
            <img src={loader} alt='Loading...' style={{width: '200px', margin: 'auto', display: 'block', backgroundColor:'rgba(36, 36, 37, 0.9);'}} />
        </Fragment>
    )
};

export default Spinner;

