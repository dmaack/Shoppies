import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import NominationsContext from '../../context/nominations/nominationsContext';
import NominationItem from './NominationItem';
import Spinner from '../layout/Spinner';

const Nominations = () => {
    const nominationsContext = useContext(NominationsContext)
    const { getNominations, nominations, loading } = nominationsContext;

    useEffect(() => {
        getNominations()
        console.log('getNominations', nominations)
    }, [])

    if(loading) {
        return <Spinner />
    } else {
        return (
            <div className='container'>
              {nominations.map(nomination => (
                  <NominationItem key={nomination.imdbID} nomination={nomination} /> 
              ))}
            </div>
        )
    }

    
};

export default Nominations;