import constanta from '../../utils/constanta';
import Axios from '../../utils/services';


/** GET PRODUCT LIST */
export const GetProductList = () => async (dispatch) => {
    dispatch({
        type: constanta.products.PRODUCT_LIST_REQUEST
    });

    try {
        const {data} = await Axios.get('/products');
    
        dispatch({
            type: constanta.products.PRODUCT_LIST_SUCCESS, 
            payload: data
        });
    } catch (error) {
        dispatch({
            type: constanta.products.PRODUCT_LIST_FAILED, 
            payload: error.message
        });
    }
}

/** GET DETAIL PRODUCT */
export const GetDetailProduct = (id) => async (dispatch) => {
    try {
        dispatch({
            type: constanta.products.PRODUCT_DETAILS_REQUEST,
            payload: id
        });

        const {data} = await Axios.get(`/products/${id}`);

        dispatch({
            type: constanta.products.PRODUCT_DETAILS_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: constanta.products.PRODUCT_DETAILS_ERROR,
            payload: error.message
        });
    }
}