import constanta from '../../utils/constanta';

export const CartListReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case constanta.carts.CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItems.find(x => x.id === item.id);
            if(product) {
                return {
                    cartItems: state.cartItems.map((x) => x.id === product.id ? item : x)
                }
            }
            return {
                cartItems: [...state.cartItems, item]
            };
        
        case constanta.carts.CART_DELETE_ITEM: 
            const productId = action.payload;
            return {
                cartItems: state.cartItems.filter(x => x.id !== productId)
            }

        case constanta.carts.CART_ERROR: 
            return {
                cartItems: null,
                errors: action.payload
            }
        default:
            return state;
    }
}