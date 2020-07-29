import constanta from '../../utils/constanta';
import Axios from '../../utils/services';
import Cookie from 'js-cookie';


export const LoginUserAccount = (email, password) => (dispatch) => {
    dispatch({
        type: constanta.auths.LOGIN_USER_REQUEST,
        payload: { email, password }
    });

    Axios.post('/users/login', {email, password})
        .then((res) => {
            if(res.data.success === true) {
                dispatch({
                    type: constanta.auths.LOGIN_USER_SUCCESS,
                    payload: {token: res.data.token, user: res.data.user}
                });
    
                Cookie.set('dataOfUser', JSON.stringify({token: res.data.token, user: res.data.user}))
            }
            else {
                dispatch({
                    type: constanta.auths.LOGIN_USER_FAILED,
                    payload: res.data.message
                });
            }
        })
        .catch((err) => {
            console.log(err.response)
            dispatch({
                type: constanta.auths.LOGIN_USER_FAILED,
                payload: err.response.data.message
            });
        })
}


export const RegisterUserAccount = (account) => async (dispatch) => {
    dispatch({
        type: constanta.auths.REGISTER_USER_REQUEST,
        payload: account
    });

    console.log(account);
    
    Axios.post('/users/register', account)
        .then((res) => {
            if(res.data.success === true) {
                dispatch({
                    type: constanta.auths.REGISTER_USER_SUCCESS,
                    payload: {token: res.data.token, user: res.data.user}
                });
    
                Cookie.set('dataOfUser', JSON.stringify({token: res.data.token, user: res.data.user}))
            }
            else {
                dispatch({
                    type: constanta.auths.REGISTER_USER_FAILED,
                    payload: res.data.message
                });
            }
        })
        .catch((err) => {
            console.log(err.response)
            dispatch({
                type: constanta.auths.REGISTER_USER_FAILED,
                payload: err.response.data.message
            });
        })
}