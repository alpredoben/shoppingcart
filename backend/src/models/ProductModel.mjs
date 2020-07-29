import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const ProductSchema = new mongoose.Schema({ 
    name: {type: String, required: true},
    image: {type: String, required: true},
    brand: {type: String, required: true},
    price: {type: Number, default: 0, required: true},
    category: {type: String, required: true},
    totalStock: {type: Number, default: 0,  required: true},
    description: {type: String, required: true},
    rating: {type: Number, default: 0, required: true},
    reviewers: {type: Number, default: 0, required: true},
});

const ProductModel = mongoose.model('Products', ProductSchema);

export default ProductModel;