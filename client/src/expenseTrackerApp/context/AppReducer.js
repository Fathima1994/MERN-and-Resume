export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state, 
                transactions: state.transactions.filter(transaction => 
                    transaction._id !== action.payLoad)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state, 
                transactions: [...state.transactions,action.payLoad]
            }
        case 'GET_TRANSACTIONS':
            return {
                ...state, 
                loading: false,
                transactions: action.payLoad
            }
        case 'TRANSACTIONS_ERROR':
            return {
                ...state, 
                error: action.payLoad
            }
        default: 
        return state;
    }
}