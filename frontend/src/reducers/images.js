import { DISPLAY_IMAGE_SUCCESS, DISPLAY_IMAGE_FAILED } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {

    const {type, payload} = action;

    switch(type) {
        case DISPLAY_IMAGE_SUCCESS: return [...state, payload];
        case DISPLAY_IMAGE_FAILED: return {...state};
        default: return state;
    }
}