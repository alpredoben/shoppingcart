import express from 'express';

import data from './data.mjs';
const app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/products', (req, res) => {
    res.send(data.products);    
});

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(x => x.id === parseInt(req.params.id));
    
    if(product) {
        res.send(product);
    }
    else {
        res.status(404).send({msg: 'Product Not Found'})
    }
});

app.listen(5000, () => { console.log('Server started on Port 5000') });