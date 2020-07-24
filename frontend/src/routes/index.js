import React from 'react';
import {HomeScreen, ProductScreen} from '../views';

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
];

export default routes;