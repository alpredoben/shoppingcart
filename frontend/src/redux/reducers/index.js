import {combineReducers} from 'redux';
import {ProductListReducer, ProductDetailsReducer} from './productReducer';
import {CartListReducer} from './cartReducer';
import {UserLoginReducer, UserRegisterReducer} from './userReducer';

import Cookie from 'js-cookie';

const cartItems = Cookie.getJSON("listCarts") || []
const authUser = Cookie.getJSON("dataOfUser") || null

export const initialState = {
    CartListReducer: { cartItems },
    UserLoginReducer: { authUser },
    UserRegisterReducer: {authUser}
};

export const reducers = combineReducers({
    ProductListReducer,
    ProductDetailsReducer,
    CartListReducer,
    UserLoginReducer,
    UserRegisterReducer
});
