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
    GET_ONE_ITEM_FAILED_USER,
    GET_FAVOURITES_SUCCESS_USER,
    GET_FAVOURTIES_FAILED_USER,
    ADD_FAVOURITES_SUCCESS_USER,
    ADD_FAVOURITES_FAILED_USER,
    REMOVE_FAVOURITES_SUCCESS_USER,
    REMOVE_FAVOURITES_FAILED_USER,
    GET_RESERVED_ITEMS_SUCCESS_USER,
    GET_RESERVED_ITEMS_FAILED_USER,
    SET_RESERVED_ITEMS_SUCCESS_USER,
    SET_RESERVED_ITEMS_FAILED_USER,
    REMOVE_RESERVED_ITEMS_SUCCESS_USER,
    REMOVE_RESERVED_ITEMS_FAILED_USER,
    GET_FOLLOWERS_SUCCESS_USER,
    GET_FOLLOWERS_FAILED_USER,
    GET_FOLLOWING_SUCCESS_USER,
    GET_FOLLOWING_FAILED_USER,
    FOLLOW_SUCCESS_USER,
    FOLLOW_FAILED_USER,
    UNFOLLOW_SUCCESS_USER,
    UNFOLLOW_FAILED_USER,
    SET_PUBLIC_PROFILE_SUCCESS_USER,
    SET_PUBLIC_PROFILE_FAILED_USER
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

// actions, users

// GET FAVOURITES, User
export const get_favourites = () => async dispatch => {
    try {
        const response = await axios.get('/api/user/actions/get/favourites');
        dispatch({type: GET_FAVOURITES_SUCCESS_USER, payload: response.data});
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: GET_FAVOURTIES_FAILED_USER })
    }
}

// ADD ITEM TO FAVOURITES, User
export const add_favourites = (item_id) => async dispatch => {
    const config = { headers: { 'Content-Type': 'application/json' }};
    try {
        const response = await axios.post(`/api/user/actions/add/favourites/${item_id}`, config);
        dispatch({ type: ADD_FAVOURITES_SUCCESS_USER, payload: response.data });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: ADD_FAVOURITES_FAILED_USER })
    }
}

// REMOVE ITEM FROM FAVOURITES, User
export const remove_favourites = (item_id) => async dispatch => {
    const config = { headers: { 'Content-Type': 'application/json' }};
    try {
        const response = await axios.post(`/api/user/actions/remove/favourites/${item_id}`, config);
        dispatch({ type: REMOVE_FAVOURITES_SUCCESS_USER, payload: response.data });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: REMOVE_FAVOURITES_FAILED_USER })
    }
}

// GET RESERVED, User
export const get_reserved = () => async dispatch => {
    try {
        const response = await axios.get('/api/user/actions/get/reserved');
        dispatch({ type: GET_RESERVED_ITEMS_SUCCESS_USER, payload: response.data });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: GET_RESERVED_ITEMS_FAILED_USER })
    }
}

// ADD ITEM TO RESERVED, User
export const add_reserved = (item_id) => async dispatch => {
    const config = { headers: { 'Content-Type': 'application/json' }};
    try {
        const response = await axios.post(`/api/user/actions/add/reserved/${item_id}`, config);
        dispatch({ type: SET_RESERVED_ITEMS_SUCCESS_USER, payload: response.data});
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: SET_RESERVED_ITEMS_FAILED_USER })
    }
}

// REMOVE RESERVED, User
export const remove_reserved = (item_id) => async dispatch => {
    const config = { headers: {'Content-Type': 'application/json'}};
    try {
        const response = await axios.post(`/api/user/actions/remove/reserved/${item_id}`, config);
        dispatch({ type: REMOVE_RESERVED_ITEMS_SUCCESS_USER, payload: response.data });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: REMOVE_RESERVED_ITEMS_FAILED_USER })
    }
}

// GET MY FOLLOWERS, User
export const get_followers = () => async dispatch => {
    try {
        const response = await axios.get('/api/user/actions/get/followers');
        dispatch({ type: GET_FOLLOWERS_SUCCESS_USER, payload: response.data });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: GET_FOLLOWERS_FAILED_USER })
    }
}

// GET MY FOLLOWERS, User
export const get_following = () => async dispatch => {
    try {
        const response = await axios.get('/api/user/actions/get/following');
        dispatch({ type: GET_FOLLOWING_SUCCESS_USER, payload: response.data });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: GET_FOLLOWING_FAILED_USER })
    }
}

// FOLLOW USER WITH ID, User
export const follow_user = (user_id) => async dispatch => {
    const config = { headers: {'Content-Type': 'application/json'}};
    try {
        const response = await axios.post(`/api/user/actions/follow/${user_id}`, config);
        dispatch({ type: FOLLOW_SUCCESS_USER, payload: response.data });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: FOLLOW_FAILED_USER })
    }
}

// UNFOLLOW USER WITH ID, User
export const unfollow_user = (user_id) => async dispatch => {
    const config = { headers: {'Content-Type': 'application/json'}};
    try {
        const response = await axios.post(`/api/user/actions/unfollow/${user_id}`, config);
        dispatch({ type: UNFOLLOW_SUCCESS_USER, payload: response.data });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: UNFOLLOW_FAILED_USER })
    }
}

// SET PUBLIC PROFILE, User
export const set_public = (isPublic) => async dispatch => {
    const config = {headers: {'Content-Type': 'application/json'}};
    const body = { "isPublic": isPublic };
    try {
        const response = await axios.post('/api/user/actions/set/public_profile', body, config);
        dispatch({ type: SET_PUBLIC_PROFILE_SUCCESS_USER, payload: response.data });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) errors.forEach(error => dispatch(set_alert(error.msg, 'failed')));
        dispatch({ type: SET_PUBLIC_PROFILE_FAILED_USER })
    }
}