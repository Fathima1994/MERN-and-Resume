import * as types from '../homeActions/types';

const initialState = {
    items: [],
    error: null
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case types.ADD_CONTACT:
            return state;
        case types.CONTACT_ERROR:
            return {
                ...state, 
                error: action.payLoad
            }
        default:
            return state;
    }
}