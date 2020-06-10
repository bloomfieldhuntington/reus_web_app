import {
    REGISTER_SUCCESS_BUSINESS,
    REGISTER_FAILED_BUSINESS,
    LOGIN_SUCCESS_BUSINESS,
    LOGIN_FAILED_BUSINESS,
    USERLOADED_SUCCESS_BUSINESS,
    USERLOADED_FAILED_BUSINESS,
    LOGOUT_SUCCESS_BUSINESS,
    REGISTER_SUCCESS_USER,
    REGISTER_FAILED_USER,
    LOGIN_SUCCESS_USER,
    LOGIN_FAILED_USER,
    USERLOADED_SUCCESS_USER,
    USERLOADED_FAILED_USER,
    LOGOUT_SUCCESS_USER
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: null,
    user: null
};

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case REGISTER_SUCCESS_BUSINESS:
        case REGISTER_SUCCESS_USER:
        case LOGIN_SUCCESS_BUSINESS:
        case LOGIN_SUCCESS_USER:
        localStorage.setItem('token', payload.token)
        return {
            ...state,
            ...payload,
            isAuthenticated: true,
            loading: false
        }
        case REGISTER_FAILED_BUSINESS:
        case REGISTER_FAILED_USER:
        case LOGIN_FAILED_BUSINESS:
        case LOGIN_FAILED_USER:
        localStorage.removeItem('token')
        return {
            token: null,
            isAuthenticated: false,
            loading: false
        }
        case USERLOADED_SUCCESS_BUSINESS:
        case USERLOADED_SUCCESS_USER:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case LOGOUT_SUCCESS_BUSINESS:
        case LOGOUT_SUCCESS_USER:
        case USERLOADED_FAILED_BUSINESS:
        case USERLOADED_FAILED_USER:
            return {
                ...state,
                token: localStorage.clear(),
                isAuthenticated: false,
                loading: false,
                user: null
            }

        default:
            return state;
    }
    
}