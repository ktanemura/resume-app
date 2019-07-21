import { combineReducers } from 'redux';
import quoteReducer from './quoteReducer';

let root = {
    motto: quoteReducer
};

export default combineReducers(root);