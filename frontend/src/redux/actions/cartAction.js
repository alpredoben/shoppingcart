import constanta from '../../utils/constanta';
import Axios from '../../utils/services';
import Cookie from 'js-cookie';

function setError(dispatch, error) {
    dispatch({
        type: constanta.carts.CART_ERROR,
        payload: error.message 
    })
}

export const AddProductToCart = (productId, quantity) => async (dispatch, getState) => {
    try {
        const {data} = await Axios.get(`/products/${productId}`);
        data.qty = quantity;
        
        dispatch({
            type: constanta.carts.CART_ADD_ITEM,
            payload: {
                id: data.id,
                name: data.name,
                brand: data.brand,
                image: data.image,
                price: data.price,
                totalStock: 16,
                qty: quantity
            }
        });

        //Ambil CartListReducer, lalu ambil State cartItems
        const {CartListReducer: { cartItems }} = getState(); 
        Cookie.set("listCarts", JSON.stringify(cartItems))

        console.log(cartItems)

    } catch (error) {
        setError(dispatch, error)
    }
}

export const RemoveProductOnCart = (id) => (dispatch, getState) => {
    try {
        dispatch({
            type: constanta.carts.CART_DELETE_ITEM,
            payload: id
        });

        const {CartListReducer: { cartItems }} = getState(); 
        Cookie.set("listCarts", JSON.stringify(cartItems))

        console.log(cartItems)

    } catch (error) {
        setError(dispatch, error)
    }
}