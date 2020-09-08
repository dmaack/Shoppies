import { SET_NOMINATION_LIMIT } from '../types';

export default (state, action) => {
    switch(action.type) {
        case SET_NOMINATION_LIMIT: 
            return {
                ...state,
                loading: true
            }
        default: 
            return state
    }
}