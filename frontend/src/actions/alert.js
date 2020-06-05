import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const set_alert = (msg, alert_type, timeout = 2000) => dispatch => {
    const id = uuidv4();
    dispatch({
        type: SET_ALERT, REMOVE_ALERT,
        payload: {msg, alert_type, id}
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id}), timeout);
}