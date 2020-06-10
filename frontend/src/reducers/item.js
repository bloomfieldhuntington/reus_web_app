import {
    CREATE_ITEM_SUCCESS_BUSINESS,
    CREATE_ITEM_FAILED_BUSINESS,
    GET_ALL_MY_ITEMS_SUCCESS_BUSINESS,
    GET_ALL_MY_ITEMS_FAILED_BUSINESS,
    GET_ONE_ITEM_SUCCESS_BUSINESS,
    GET_ONE_ITEM_FAILED_BUSINESS,
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
    GET_RESERVED_ITEMS_SUCCESS_USER,
    GET_RESERVED_ITEMS_FAILED_USER
} from '../actions/types';

const initialState = {
    items: [],
    item: null,
    favouriteItems: [],
    reservedItems: [],
    currentRentals: [],
    itemsForRent: [],
    itemsRentedOut: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case CREATE_ITEM_SUCCESS_BUSINESS:
            return {
                ...state,
                items: [...state.items, payload],
                loading: false
            } 
        case GET_ALL_MY_ITEMS_SUCCESS_BUSINESS:
            return {
                ...state,
                itemsForRent: payload,
                loading: false
            }
        case GET_ONE_ITEM_SUCCESS_BUSINESS:
        case GET_ONE_ITEM_SUCCESS_USER:
            return {
                ...state,
                item: payload,
                loading: false
            }
        case GET_ITEMS_FOR_RENT_SUCCESS_BUSINESS:
            return {
                ...state,
                itemsForRent: payload,
                loading: false
            }
        case GET_ITEMS_RENTED_OUT_SUCCESS_BUSINESS:
            return {
                ...state,
                itemsRentedOut: payload,
                loading: false
            }
        case GET_ALL_ITEMS_SUCCESS_USER:
            return {
                ...state,
                items: payload,
                loading: false
            }
        case GET_FAVOURITES_SUCCESS_USER:
            return {
                ...state,
                favouriteItems: payload,
                loading: false
            }
        case GET_RESERVED_ITEMS_SUCCESS_USER:
            return {
                ...state,
                reservedItems: payload,
                loading: false
            }
        case CREATE_ITEM_FAILED_BUSINESS:
        case GET_ALL_MY_ITEMS_FAILED_BUSINESS:
        case GET_ONE_ITEM_FAILED_BUSINESS:
        case GET_ITEMS_FOR_RENT_FAILED_BUSINESS:
        case GET_ITEMS_RENTED_OUT_FAILED_BUSINESS:
        case GET_ALL_ITEMS_FAILED_USER:
        case GET_ONE_ITEM_FAILED_USER:
        case GET_FAVOURTIES_FAILED_USER:
        case GET_RESERVED_ITEMS_FAILED_USER:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default: return state;
    }

}