import axios from 'axios';
import { set_alert } from './alert';
import {
    CREATE_ITEM_SUCCESS_BUSINESS,
    CREATE_ITEM_FAILED_BUSINESS
} from './types';

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