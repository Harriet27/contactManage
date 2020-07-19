import Axios from 'axios';
import { API_URL } from '../../Support/API_URL';
import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILED,
    ADD_ITEM,
} from '../Types';

export const GetContacts = () => {
    return async (dispatch) => {
        dispatch({
            type: FETCH_START,
        });
        try {
            let res = await Axios.get(`${API_URL}/contact`);
            dispatch({
                type: FETCH_SUCCESS,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: FETCH_FAILED,
            });
        }
    };
};

export const GetContactById = (id) => {
    return async (dispatch) => {
        dispatch({
            type: FETCH_START,
        });
        try {
            let res = await Axios.get(`${API_URL}/contact/${id}`);
            dispatch({
                type: FETCH_SUCCESS,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: FETCH_FAILED,
            });
        }
    };
};

export const AddContact = (form) => {
    return async (dispatch) => {
        dispatch({
            type: FETCH_START,
        });
        try {
            let res = await Axios.post(`${API_URL}/contact`, form);
            dispatch({
                type: ADD_ITEM,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: FETCH_FAILED,
            });
        }
    };
};

export const EditContact = (id, form) => {
    return async (dispatch) => {
        dispatch({
            type: FETCH_START,
        });
        try {
            let res = await Axios.put(`${API_URL}/contact/${id}`, form);
            dispatch({
                type: FETCH_SUCCESS,
                payload: res.data.data,
            })
        } catch {
            dispatch({
                type: FETCH_FAILED,
            });
        }
    };
};

export const DeleteContact = (id) => {
    return async (dispatch) => {
        dispatch({
            type: FETCH_START,
        });
        try {
            let res = await Axios.delete(`${API_URL}/contact/${id}`);
            dispatch({
                type: FETCH_SUCCESS,
                payload: res.data.data,
            })
        } catch {
            dispatch({
                type: FETCH_FAILED,
            });
        }
    };
};
