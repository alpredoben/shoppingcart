import React from 'react';
import data from '../../data';
import { Link } from 'react-router-dom';
function ProductScreen(props) {
    const product = data.products.find(x => x.id === parseInt(props.match.params.id));

    return (
        <div>
            <div className="back-to-result">
                <Link to="/">Back To Result</Link>
            </div>
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
                            Status: {product.status}
                        </li>
                        <li>
                            Qty: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3 </option>
                            </select>
                        </li> 
                        <li>
                            <button className="button button-primary">
                                Add To Cart
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default ProductScreen;