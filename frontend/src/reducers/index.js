import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import item from './item';
import images from './images';

export default combineReducers({
    alert,
    auth,
    item
})