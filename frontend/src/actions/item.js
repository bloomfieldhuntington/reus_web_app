import axios from 'axios';
import { set_alert } from './alert';
import {
    CREATE_ITEM_SUCCESS_BUSINESS,
    CREATE_ITEM_FAILED_BUSINESS,
    GET_ALL_MY_ITEMS_SUCCESS_BUSINESS,
    GET_ALL_MY_ITEMS_FAILED_BUSINESS,
    GET_ONE_ITEM_SUCCESS_BUSINESS,
    GET_ONE_ITEM_FAILED_BUSINESS,
    GET_RENTEE_SUCCESS_BUSINESS,
    GET_RENTEE_FAILED_BUSINESS,
    SET_RENTEE_SUCCESS_BUSINESS,
    SET_RENTEE_FAILED_BUSINESS,
    GET_TIMES_RENTED_SUCCESS_BUSINESS,
    GET_TIMES_RENTED_FAILED_BUSINESS,
    GET_ITEMS_FOR_RENT_SUCCESS_BUSINESS,
    GET_ITEMS_FOR_RENT_FAILED_BUSINESS,
    GET_ITEMS_RENTED_OUT_SUCCESS_BUSINESS,
    GET_ITEMS_RENTED_OUT_FAILED_BUSINESS,
    GET_ALL_ITEMS_SUCCESS_USER,
    GET_ALL_ITEMS_FAILED_USER,
    GET_ONE_ITEM_SUCCESS_USER,
    GET_ONE_ITEM_FAILED_USER
} from './types';

// item

// CREATE ITEM
export const create_item = (formData) => async dispatch => {
    const config = { headers: { 'Content-Type': 'application/json' }};
    try {
        const response = await axios.post('/api/item/create', formData, config);
        dispatch({ type: CREATE_ITEM_SUCCESS_BUSINESS, payload: response.data });
        
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: CREATE_ITEM_FAILED_BUSINESS });
    }
}

// GET ALL MY ITEMS
export const get_all_items = () => async dispatch => {
    try {
        const response = await axios.get('/api/item/get/all');
        dispatch({ type: GET_ALL_MY_ITEMS_SUCCESS_BUSINESS, payload: response.data });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: GET_ALL_MY_ITEMS_FAILED_BUSINESS });
    }

}

// GET ONE ITEM ID
export const get_one_item = (item_id) => async dispatch => {
    try {
        const response = await axios.get(`/api/item/get/${item_id}`);
        dispatch({ type: GET_ONE_ITEM_SUCCESS_BUSINESS, payload: response.data });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: GET_ONE_ITEM_FAILED_BUSINESS });
    }
}

// GET RENTEE OF ITEM
export const get_rentee = (item_id) => async dispatch => {
    try {
        const response = await axios.get(`/api/item/get/rented_by/${item_id}`);
        dispatch({ type: GET_RENTEE_SUCCESS_BUSINESS, payload: response.data });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: GET_RENTEE_FAILED_BUSINESS });
    }
}

// SET RENTEE
export const set_rentee = (item_id, renter_id) => async dispatch => {
    const config = { headers: { 'Content-Type': 'application/json' }};
    const body = { "renter_id": renter_id };
    try {
        const response = await axios.post(`/api/item/set/rented_by/${item_id}`, body, config);
        dispatch({ type: SET_RENTEE_SUCCESS_BUSINESS, payload: response.data });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: SET_RENTEE_FAILED_BUSINESS });
    }
}

// GET TIMES RENTED
export const get_times_rented = (item_id) => async dispatch => {
    try {
        const response = await axios.get(`/api/item/get/times_rented/${item_id}`);
        dispatch({ type: GET_TIMES_RENTED_SUCCESS_BUSINESS, payload: response.data });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: GET_TIMES_RENTED_FAILED_BUSINESS });
    }
}

// actions, business

// GET ITEMS FOR RENT
export const get_items_for_rent = () => async dispatch => {
    try {
        const response = await axios.get('/api/business/actions/get/items_for_rent');
        dispatch({ type: GET_ITEMS_FOR_RENT_SUCCESS_BUSINESS, payload: response.data });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: GET_ITEMS_FOR_RENT_FAILED_BUSINESS });
    }
}

// GET ITEMS RENTED OUT
export const get_items_rented_out = () => async dispatch => {
    try {
        const response = await axios.get('/api/business/actions/get/items_rented_out');
        dispatch({ type: GET_ITEMS_RENTED_OUT_SUCCESS_BUSINESS, payload: response.data });
        
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: GET_ITEMS_RENTED_OUT_FAILED_BUSINESS });
    }
}

// user

// GET ALL ITEMS
export const get_all_items_user = () => async dispatch => {
    try {
        const response = await axios.get('/api/item/user/get/all');
        dispatch({ type: GET_ALL_ITEMS_SUCCESS_USER, payload: response.data });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: GET_ALL_ITEMS_FAILED_USER })
    }
}

// GET ONE ITEM BY ID
export const get_one_item_user = (item_id) => async dispatch => {
    try {
        const response = await axios.get(`/api/item/user/get/${item_id}`);
        dispatch({ type: GET_ONE_ITEM_SUCCESS_USER, payload: response.data });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: GET_ONE_ITEM_FAILED_USER });
    }
}