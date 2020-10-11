import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
    transactions: [],
    error: null,
    loading: true
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    // Actions
    async function getTransactions() {
        try {
            const res = await axios.get('/api/v1/transactions');
            dispatch({
                type: 'GET_TRANSACTIONS',
                payLoad: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payLoad: err.response.data.error
            })
        }
    }

    async function deleteTransaction(id) {
        try {
            const res = axios.delete(`api/v1/transactions/${id}`);
            dispatch({
                type: 'DELETE_TRANSACTION',
                payLoad: id
            }); 
        } catch (err) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payLoad: err.response.data.error
            })
        }
    }

    async function addTransaction(transaction) {
        try {
            const params = JSON.stringify({

                "text": transaction.text,
                "amount": transaction.amount
             
              });
            const res = await axios.post('/api/v1/transactions', params,{
                "headers": {
                    "content-type": "application/json",
                },
            })

            dispatch({
                type: 'ADD_TRANSACTION',
                payLoad: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payLoad: err.response.data.error
            })
        }
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            error: state.error,
            loading: state.loading,
            getTransactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>    );
}
