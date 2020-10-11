import * as types from './types';
import axios from 'axios';

export const fetchTodos= () => async dispatch => {
    try {
        const res = await axios.get('/api/v1/todos');
         dispatch({
            type: types.FETCH_TODO,
            payload: res.data.data
        }); 
    } catch (err) {
        dispatch({
            type: types.TODOS_ERROR,
            payLoad: err.response.data.error
        });
    }
    
};

export const addTodos= (item) => async dispatch => {
    try {
        const res = await axios.post('/api/v1/todos', {
            ...item});
        dispatch({
            type: types.ADD_TODO,
            payload: res.data.data
        });
    } catch (err) {
        dispatch({
            type: types.TODOS_ERROR,
            payLoad: err.response.data.error
        });
    }
};

export const markTodoComplete= (id) => async dispatch =>{
    try {
        const res = await axios.post(`/api/v1/todos/${id}`);
        dispatch({
            type: types.MARK_COMPLETE,
            payload: id
        }); 
    } catch (err) {
        dispatch({
            type: types.TODOS_ERROR,
            payLoad: err.response.data.error
        });
    }
};

export const deleteTodos= (id) => async dispatch => {
    try {
        const res = await axios.delete(`/api/v1/todos/${id}`);
        dispatch({
            type: types.DELETE_TODO,
            payload: id
        });  
    } catch (err) {
        dispatch({
            type: types.TODOS_ERROR,
            payLoad: err.response.data.error
        }); 
    }
};

export const filterTodos= (value) => dispatch => {
    dispatch({
        type: types.FILTER_TODO,
        payload: value
    });
};