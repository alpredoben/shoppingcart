import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GetDetailProduct } from '../../redux/actions';
function ProductScreen(props) {

    const [qty, setQty] = useState(1)

    const { product, loading, errors } = useSelector(state => state.ProductDetailsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetDetailProduct(parseInt(props.match.params.id)));
        
        return () => {
        }
    }, [])

    const addToCartHandler = () => {
        props.history.push(`/cart/${props.match.params.id}?qty=${qty}`)
    }

    
    return (
        <div>
            <div className="back-to-result">
                <Link to="/">Back To Result</Link>
            </div>
            {
                loading ? <div>Loading</div> : errors ? <div>Error</div> : (
                    <div className="details">
                        <div className="details-image">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="details-info">
                            <ul>
                                <li>
                                    <h4>{product.name}</h4>
                                </li>
                                <li>
                                    {product.rating} Stars ({product.reviewers} Reviews)
                                </li>
                                <li>
                                    Price : <b>${product.price}</b>
                                </li>
                                <li>
                                    Description :
                                    <div>
                                        {product.description}
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="details-action">
                            <ul>
                                <li>
                                    Price: {product.price}
                                </li>
                                <li>
                                    Status: {product.totalStock > 0 ? "In Stock" : "Out Stock"}
                                </li>
                                <li>
                                    Qty: <select value={qty} onChange={(e) => { setQty(e.target.value)}}>
                                    {
                                        [...Array(product.totalStock).keys()].map( x => 
                                            <option key={x} value={x+1}>{x+1}</option>    
                                        )
                                    }
                                    </select>
                                </li>
                                <li>
                                    {
                                        product.totalStock > 0 ? (
                                            <button className="button button-primary" onClick={addToCartHandler}>
                                                Add To Cart
                                            </button>
                                        ) : <div>Out Of Stock</div> 
                                    }
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default ProductScreen;