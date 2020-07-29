import Product from '../models/ProductModel.mjs';
import secrets from '../config/secrets.mjs'
import jwt from 'jsonwebtoken';

export default {
    storeProduct: async(req, res) => {
        try {
            const product = new Product({
                name: req.body.name,
                image: req.body.image,
                brand: req.body.brand,
                price: req.body.price,
                category: req.body.category,
                totalStock: req.body.stock,
                description: req.body.description,
                rating: req.body.rating,
                reviewers: req.body.review,
            });

            const saveProduct = await product.save();

            if(saveProduct) {
                return res.status(201).send({
                    success: true, 
                    product: saveProduct, 
                    message: 'New product create successfully' 
                });
            }
            else {
                return res.status(500).send({
                    success: false, 
                    message: 'Error create new product' 
                });
            }
            
        } catch (error) {
            res.send({ msg: error.message, error })
        }
    },

    findProduct: async(req, res) => {
        const products = await Product.find({});
        res.status(200).send({ success: true, product })
    },

}
