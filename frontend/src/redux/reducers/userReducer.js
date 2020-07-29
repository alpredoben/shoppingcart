import constanta from '../../utils/constanta';


/** LOGIN AUTHENTICATION */
export const UserLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case constanta.auths.LOGIN_USER_REQUEST:
            return {
                loading: true
            }
            
        case constanta.auths.LOGIN_USER_SUCCESS:
            return {
                loading: false,
                authUser: action.payload
            }

        case constanta.auths.LOGIN_USER_FAILED :
            return {
                loading: false,
                errors: action.payload
            }
    
        default:
            return state;
    }
}

export const UserRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case constanta.auths.REGISTER_USER_REQUEST:
            return {
                loading: true
            }
            
        case constanta.auths.REGISTER_USER_SUCCESS:
            return {
                loading: false,
                authUser: action.payload
            }

        case constanta.auths.REGISTER_USER_FAILED :
            return {
                loading: false,
                errors: action.payload
            }
    
        default:
            return state;
    }
}