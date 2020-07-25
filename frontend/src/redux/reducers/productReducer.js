import constanta from '../../utils/constanta';

/** PRODUCT LIST */
export const ProductListReducer = (state = {products: []}, action) => {
    switch (action.type) {
        case constanta.products.PRODUCT_LIST_REQUEST:
            return {
                loading: true
            }
        case constanta.products.PRODUCT_LIST_SUCCESS:
            return {
                loading: false, 
                products: action.payload
            }
        case constanta.products.PRODUCT_LIST_FAILED:
            return {
                loading: false,
                errors: action.payload
            }
        default:
            return state
    }
}

/** PRODUCT DETAILS */
export const ProductDetailsReducer = (state = {product: {}}, action) => {
    switch (action.type) {
        case constanta.products.PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
            }
            
        case constanta.products.PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        
        case constanta.products.PRODUCT_DETAILS_ERROR:
            return {
                loading: false,
                errors: action.payload
            }
        default:
            return state;
    }
}