import React, { useReducer } from 'react';
import axios from 'axios';
import NominationsContext from './nominationsContext';
import NominationsReducer from './nominationsReducer';
import {
    GET_NOMINATIONS,
    ADD_NOMINATION,
    REMOVE_NOMINATION,
    NOMINATION_ERROR,
    SET_LOADING
} from '../types';

const NominationState = props => {
    const initialState = {
        nominations: [],
        error: null,
        loading: false,
        nominationCount: 0
    }


const [ state, dispatch ] = useReducer(NominationsReducer, initialState);

// Get Nominations
const getNominations = async () => {

    try {
        setLoading()
        const res = await axios.get('/api/nominations')

        Promise.all(res.data.map(async nomination => {
            let res = await axios.get(`https://www.omdbapi.com/?apikey=f52ad4e6&i=${nomination.imdbID}&type=movie`)
            res.data.id = nomination._id
            return res.data
        }))
            .then((values) => {
                console.log('values',values)
                
                dispatch({
                    type: GET_NOMINATIONS,
                    payload: values
                })
            })

        console.log('getNominations res', res)

       
    } catch (err) {
        dispatch({
            type: NOMINATION_ERROR,
            payload: err
        })
    }
}

// Add Nomination 
const addNomination = async imdbID => {
    try {

        const res = await axios.post('/api/nominations', {imdbID: imdbID})
        console.log ('add res', res.data)

        dispatch({
            type: ADD_NOMINATION,
            payload: res.data
        })


    } catch (err) {
        dispatch({
            type: NOMINATION_ERROR,
            payload: err
        })
    }
    console.log('add nomintion', state.nominations)
}

// Remove Nomination 
const removeNomination = async id => {
    try {
        await axios.delete(`/api/nominations/${id}`)

        dispatch({
            type: REMOVE_NOMINATION,
            payload: id
        })

    } catch (err) {
        dispatch({
            type: NOMINATION_ERROR,
            payload: err
        })
    }
}

  // Set Loading
  const setLoading = () => dispatch({ 
    type: SET_LOADING
})


    return (
        <NominationsContext.Provider
            value={{
                nominations: state.nominations,
                error: state.error,
                nominationCount: state.nominationCount,
                getNominations,
                addNomination,
                removeNomination
            }}
        >
            { props.children }
        </NominationsContext.Provider>
    )
}


export default NominationState;