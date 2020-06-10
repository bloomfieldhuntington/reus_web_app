import axios from 'axios';
import { set_alert } from './alert';
import {
    REGISTER_SUCCESS_USER,
    REGISTER_FAILED_USER,
    USERLOADED_SUCCESS_USER,
    USERLOADED_FAILED_USER,
    LOGIN_SUCCESS_USER,
    LOGIN_FAILED_USER,
    LOGOUT_SUCCESS_USER
} from './types';
import set_auth_token from '../utils/set_auth_token';

// LOAD USER, User
export const load_user = () => async dispatch => {
    if (localStorage.token) {
        set_auth_token(localStorage.token);
    }
    try {
        const response = await axios.get('/api/user/auth/get/user');
        dispatch({
            type: USERLOADED_SUCCESS_USER,
            payload: response.data
        })
    } catch (error) {
        console.log('Load user failed...')
        dispatch({ type: USERLOADED_FAILED_USER})
    }
}
// REGISTER, User
export const register_user = ({username, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({username, email, password});
    try {
        const response = await axios.post('/api/user/auth/register', body, config);
        dispatch({
            type: REGISTER_SUCCESS_USER,
            payload: response.data
        })
        dispatch(load_user());
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(set_alert(error.msg, 'red')));
        }
        dispatch({
            type: REGISTER_FAILED_USER
        })
    }
}
// LOGIN, User
export const login_user = ({email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({email, password});
    try {
        const response = await axios.post('/api/user/auth/login', body, config);
        dispatch({
            type: LOGIN_SUCCESS_USER,
            payload: response.data
        });
        dispatch(load_user());
    } catch (error) {
        const errors = error.response.data.errors;
        if (error) {
            errors.forEach(error => dispatch(set_alert(error.msg, 'red')));
        }
        dispatch({
            type: LOGIN_FAILED_USER
        })
    }
}
// LOGOUT, User
export const logout_user = () => dispatch => {
    dispatch({
        type: LOGOUT_SUCCESS_USER
    })
}