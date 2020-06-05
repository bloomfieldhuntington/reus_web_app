import axios from 'axios';
import { set_alert } from './alert';
import {
    REGISTER_SUCCESS_BUSINESS,
    REGISTER_FAILED_BUSINESS,
    LOGIN_SUCCESS_BUSINESS,
    LOGIN_FAILED_BUSINESS,
    USERLOADED_SUCCESS_BUSINESS,
    USERLOADED_FAILED_BUSINESS,
    LOGOUT_SUCCESS_BUSINESS
} from './types';
import set_auth_token from '../utils/set_auth_token';

// LOAD USER, Business
export const load_user_business = () => async dispatch => {
    if (localStorage.token) {
        set_auth_token(localStorage.token);
    }
    try {
        const response = await axios.get('/api/business/auth/get/user');
        dispatch({
            type: USERLOADED_SUCCESS_BUSINESS,
            payload: response.data
        })
    } catch (error) {
        console.log('Load user failed...')
        dispatch({ type: USERLOADED_FAILED_BUSINESS})
    }
}
// REGISTER, Business
export const register_business = ({username, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({username, email, password});
    try {
        const response = await axios.post('/api/business/auth/register', body, config);
        dispatch({
            type: REGISTER_SUCCESS_BUSINESS,
            payload: response.data
        })
        dispatch(load_user_business());
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        }
        dispatch({
            type: REGISTER_FAILED_BUSINESS
        })
    }
}
// LOGIN, Business
export const login_business = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({email, password});
    try {
        const response = await axios.post('/api/business/auth/login', body, config);
        dispatch({
            type: LOGIN_SUCCESS_BUSINESS,
            payload: response.data
        });
        dispatch(load_user_business());
    } catch (error) {
        const errors = error.response.data.errors;
        if (error) {
            errors.forEach(error => dispatch(set_alert(error.msg, 'red')));
        }
        dispatch({
            type: LOGIN_FAILED_BUSINESS
        })
    }
}
// LOGOUT, Business
export const logout_business = () => dispatch => {
    dispatch({
        type: LOGOUT_SUCCESS_BUSINESS
    })
}
