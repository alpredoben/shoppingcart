import React from 'react';
import {HomeScreen, ProductScreen, CartScreen, LoginScreen, RegisterScreen, UserProfileScreen} from '../views';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginScreen
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterScreen
    },
    {
        path: '/',
        exact: true,
        name: 'Home',
        component: HomeScreen,
    },
    {
        path: '/products/:id',
        name: 'Product',
        component: ProductScreen,
    },
    {
        path: '/cart/:id?',
        name: 'Cart',
        component: CartScreen
    },
    {
        path: '/profile',
        name: 'UserProfile',
        component: UserProfileScreen
    },

];

export default routes;