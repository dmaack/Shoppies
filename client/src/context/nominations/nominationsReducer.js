import { GET_NOMINATIONS, ADD_NOMINATION, REMOVE_NOMINATION, SET_LOADING, NOMINATION_ERROR } from '../types';

export default (state, action) => {
    switch(action.type) {
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            }
        case GET_NOMINATIONS: 
            return {
                ...state,
                nominations: action.payload,
                loading: false,
                nominationCount: action.payload.length
            }
        case ADD_NOMINATION:
            return {
                ...state,
                nominations: [action.payload, ...state.nominations],
                loading: false,
                nominationCount: state.nominationCount++
            }
        case REMOVE_NOMINATION:
            return {
                ...state,
                nominations: state.nominations.filter(nomination => nomination.id !== action.payload),
                loading: false,
                nominationCount: state.nominationCount--
            }
        case NOMINATION_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state
    }
}