import {combineReducers} from 'redux';
import {ProductListReducer, ProductDetailsReducer} from './productReducer';

const reducers = combineReducers({
    ProductListReducer,
    ProductDetailsReducer,
});

export default reducers;