import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { AddProductToCart, RemoveProductOnCart} from '../../redux/actions';

function CartScreen(props) {
    const productId = parseInt(props.match.params.id);
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1; 
    const {cartItems} = useSelector(state => state.CartListReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        if(productId) {
            dispatch(AddProductToCart(productId, qty))
        }

        return () => {}
    }, [])

    const deleteCartHandler = (PID) => {
        dispatch(RemoveProductOnCart(PID))
    }

    const changeQuantityOrderHandler = (id, numQty) =>  {
        dispatch(AddProductToCart(id, parseInt(numQty)))
        console.log(cartItems)
    }

    const checkoutProcessHandler = () => {
        props.history.push('/login?redirect=shipping')
    }

    return (
        <div className="cart"> 
            <div className="cart-list">
                <ul className="cart-list-container">
                    <li>
                        <h3>Shopping Cart</h3>
                        <div>
                            Price
                        </div>
                    </li>
                    {
                        cartItems.length === 0 ? (
                            <li>
                                <div>Cart Item Is Empty</div>
                            </li>
                        ) : (
                        cartItems.map( item => (
                            <li key={item.id}>                   
                                <div className="cart-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="cart-name">
                                    <div>
                                        <Link to={`/products/${item.id}`}>
                                            {item.name}
                                        </Link>
                                    </div>
                                    <div>
                                        Qty
                                        <select value={item.qty} onChange={(e) => changeQuantityOrderHandler(item.id, e.target.value)}>
                                            
                                            {
                                                [...Array(item.totalStock).keys()].map( x => 
                                                    <option key={x} value={x+1}>{x+1}</option>    
                                                )
                                            }

                                        </select>
                                        <button type="button" onClick={() => deleteCartHandler(item.id)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                <div className="cart-price">
                                    ${item.price}
                                </div>
                            </li>
                        )))
                    }
                </ul>
            </div>

            <div className="cart-action">
                <h3>
                    Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
                    : $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}    
                </h3> 
                <button type="button" onClick={checkoutProcessHandler} className="button button-primary full-width" disabled={cartItems.length === 0}>
                    Processed To Checkout
                </button>
                
            </div>
        </div>
    )
}

export default CartScreen;
