import React, { useReducer} from 'react';
import axios from 'axios';
import ShoppiesContext from './shoppiesContext';
import ShoppiesReducer from './shoppiesReducer';
import { SEARCH_MOVIES, GET_MOVIE, SET_LOADING } from '../types';

const ShoppiesState = props => {
    const initialState = {
        movies: [],
        movie: {},
        loading: false
    }

    const [state, dispatch] = useReducer(ShoppiesReducer, initialState);

    // Search Movies
    const searchMovies = async (text) => {
        setLoading()
    
        const res = await axios.get(`http://www.omdbapi.com/?apikey=f52ad4e6&s=${text}&type=movie`)
        console.log('response from search', res)
        console.log('text from search', text)
    
       dispatch({
           type: SEARCH_MOVIES,
           payload: res.data.Search
       })
      }

    // Get Movie
    const getMovie = async (imdbID) => {
        setLoading()

        const res = await axios.get(`http://www.omdbapi.com/?apikey=f52ad4e6&i=${imdbID}&type=movie`)
        console.log('response from get movie', res)
        
        dispatch({
            type: GET_MOVIE,
            payload: res.data
        })
  }

    // Set Loading
    const setLoading = () => dispatch({ 
        type: SET_LOADING
    })

    return <ShoppiesContext.Provider
        value={{
            movies: state.movies,
            movie: state.movie,
            loading: state.loading,
            searchMovies,
            getMovie
        }}
    >
        {props.children}
    </ShoppiesContext.Provider>
}

export default ShoppiesState;