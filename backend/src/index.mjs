import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routers from './routers/index.mjs';

const app = express();
const PORT = process.env.LISTEN_PORT || '9000'
dotenv.config();


app.use(bodyParser.json());

/** Connection To MongoDB */
const mongoHost = process.env.MONGO_DB_HOST;
const mongoPort = process.env.MONGO_DB_PORT;
const mongoString = 'mongodb://' + mongoHost + ':' + mongoPort;
const mongoDBName = process.env.MONGO_DB_NAME;

mongoose.connect(mongoString + "/" + mongoDBName, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on("connected", () => {
    console.log("Database " + mongoDBName + " is Connecting ...")
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(routers)

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

app.listen(PORT, () => { console.log(`Server started on Port ${PORT}`) });