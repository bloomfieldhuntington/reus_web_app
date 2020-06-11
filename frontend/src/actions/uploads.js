  
import axios from 'axios';
import { set_alert } from './alert';
import {
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_FAILED,
    DISPLAY_IMAGE_SUCCESS,
    DISPLAY_IMAGE_FAILED
    } from './types';
// import setAuthToken from '../utils/setAuthToken';

// Upload file to server
// Create new post (c_users only)
export const uploadFile = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    try {
        const res = await axios.post("/api/item/upload", formData, config);
        dispatch({
            type: UPLOAD_FILE_SUCCESS,
            payload: res.data
        });
        dispatch(set_alert('File Uploaded', 'green'))
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors) {
            errors.forEach(error => dispatch(set_alert(error.msg, 'red')));
        }
        dispatch({
            type: UPLOAD_FILE_FAILED
        })
    }
}

export const displayImage = (item_id) => async dispatch => {
    const config = {headers: {'Content-Type': 'multipart/form-data'}};
    try {
        const response = await axios.get(`/api/item/get/images/${item_id}`);
        dispatch({ type: DISPLAY_IMAGE_SUCCESS, payload: response.data})
        
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: DISPLAY_IMAGE_FAILED })
    }
}