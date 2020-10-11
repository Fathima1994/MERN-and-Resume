import { combineReducers } from 'redux';
import reducer from './reducer';
import homereducer from '../../Home/homeReducers/reducer';

export default combineReducers({
    todo: reducer,
    contact: homereducer
});