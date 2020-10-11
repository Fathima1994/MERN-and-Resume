import * as types from '../todoActions/types';

const initialState = {
    items: [],
    oldItems: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case types.ADD_TODO:
            return {
                ...state,
                items: [...state.items,action.payload]
            }
        case types.FETCH_TODO:
            return {
                ...state,
                items: action.payload
            }
        case types.MARK_COMPLETE:
            return {
                ...state,
                items: state.items.map(todo => 
                    todo._id === action.payload ? {...todo, completed: !todo.completed} : todo
                )
            }
        case types.DELETE_TODO:
            return {
                ...state,
                items: state.items.filter(todo => todo._id !== action.payload)
            }
        case types.FILTER_TODO:
            if(action.payload.toLowerCase()) {
                if(state.oldItems.length > 0){
                    return {
                        ...state,
                        items: state.oldItems.filter(todo => todo.title.toLowerCase().includes(action.payload.toLowerCase(),0))
                    }
                }
                else {
                    return {
                        ...state,
                        oldItems: state.items,
                        items: state.items.filter(todo => todo.title.toLowerCase().includes(action.payload.toLowerCase(),0))
                    }
                }
            }
            else {
                return {
                    ...state,
                    items: state.oldItems
                }
            }
        case types.TODOS_ERROR:
            return {
                ...state, 
                error: action.payLoad
            }
        default:
            return state;
    }
}