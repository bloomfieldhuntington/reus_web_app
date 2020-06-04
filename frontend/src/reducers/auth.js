import {
    REGISTER_SUCCESS_BUSINESS,
    REGISTER_FAILED_BUSINESS,
    USERLOADED_SUCCESS_BUSINESS,
    LOGOUT_SUCCESS_BUSINESS,
    USERLOADED_FAILED_BUSINESS,
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: null,
    user: null
};

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case REGISTER_SUCCESS_BUSINESS:
        localStorage.setItem('token', payload.token)
        return {
            ...state,
            ...payload,
            isAuthenticated: true,
            loading: false
        }
        case REGISTER_FAILED_BUSINESS:
        localStorage.removeItem('token')
        return {
            token: null,
            isAuthenticated: false,
            loading: false
        }
        case USERLOADED_SUCCESS_BUSINESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case LOGOUT_SUCCESS_BUSINESS:
        case USERLOADED_FAILED_BUSINESS:
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