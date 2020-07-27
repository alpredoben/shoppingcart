import {combineReducers} from 'redux';
import {ProductListReducer, ProductDetailsReducer} from './productReducer';
import {CartListReducer} from './cartReducer'
import Cookie from 'js-cookie';

const cartItems = Cookie.getJSON("listCarts") || []

console.log(cartItems)

export const initialState = {
    CartListReducer: { cartItems }
};

export const reducers = combineReducers({
    ProductListReducer,
    ProductDetailsReducer,
    CartListReducer,
});
