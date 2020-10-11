import * as types from './types';
import axios from 'axios';

export const addContact= (item) => async dispatch => {
    try {
        const res = await axios.post('/api/v1/contacts', {
            ...item});
            if(res.status === 201) {
                document.querySelector('#success').children[0].style.display = 'block';
            }
            else {
                document.querySelector('#success').children[0].style.display = 'none';
            }
            setTimeout(function(){document.querySelector('#success').children[0].style.display = 'none'; }, 1000);
            dispatch({
                type: types.ADD_CONTACT,
                payload: res.data.data
            });
    } catch (err) {
        dispatch({
            type: types.CONTACT_ERROR,
            payLoad: err.response.data.error
        });
    }
};