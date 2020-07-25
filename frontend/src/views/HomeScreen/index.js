import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { GetProductList } from '../../redux/actions';


function HomeScreen(props) {
    const {products, loading, errors} = useSelector(state => state.ProductListReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetProductList());
        return () => {}
    }, []);


    return loading ? <div>Loading...</div> : errors ? <div>Error..</div> : (
        <ul className="products">
            {products.map((product, index) => (
            <li key={index}>
                <div className="product">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                />
                <div className="product-name">
                    <Link to={'products/' + product.id}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">
                    {product.rating} Stars ({product.reviewers} Reviews)
                </div>
                </div>
            </li>
            ))}
        </ul>
    );
}

export default HomeScreen;