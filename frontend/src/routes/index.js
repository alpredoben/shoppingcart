import React from 'react';
import {HomeScreen, ProductScreen, CartScreen} from '../views';

const routes = [
    {
        path: '/',
        exact: true,
        name: 'Home',
        component: HomeScreen,
    },
    {
        path: '/products/:id',
        exact: true,
        name: 'Product',
        component: ProductScreen,
    },
    {
        path: '/cart/:id?',
        exact: true,
        name: 'Cart',
        component: CartScreen
    }
];

export default routes;