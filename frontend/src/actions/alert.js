import { v4 as uuid} from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const set_alert = (msg, alert_type, timeout = 2000) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: SET_ALERT, REMOVE_ALERT,
        payload: {msg, alert_type, id}
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id}), timeout);
}