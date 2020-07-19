import Axios from 'axios';
import { API_URL } from '../../Support/API_URL';
import { CORS } from '../../Support/Cors';
import {
    AUTH_START,
    AUTH_REGISTER,
    AUTH_LOGIN,
    AUTH_FAILED,
} from '../Types';

// Access-Control-Allow-Origin: *

export const register = (form) => {
    console.log('before async');
    return async (dispatch) => {
        console.log('after async');
        dispatch({
            type: AUTH_START,
        });
        console.log('before try');
        try {
            console.log('this is try');
            let res = await Axios.post(`${CORS}/${API_URL}/api/authenticate/addnew`, form);
            console.log('response ok!');
            let { token } = res.data.data;
            dispatch({
                type: AUTH_REGISTER,
                payload: res.data.data,
            });
            localStorage.setItem('token', token);
            console.log('register done!');
        } catch(e) {
            console.log(e);
            console.log('this is catch');
            dispatch({
                type: AUTH_FAILED,
            });
        }
    };
};

export const login = (form) => {
    return async (dispatch) => {
        dispatch({
            type: AUTH_START,
        });
        try {
            let res = await Axios.post(`${API_URL}/api/authenticate`, form);
            let { token } = res.data.data;
            dispatch({
                type: AUTH_LOGIN,
                payload: res.data.data,
            });
            localStorage.getItem('token', token);
            console.log('login done!');
        } catch {
            dispatch({
                type: AUTH_FAILED,
            });
        }
    };
};
