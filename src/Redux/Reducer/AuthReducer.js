import {
    AUTH_START,
    AUTH_REGISTER,
    AUTH_LOGIN,
    AUTH_FAILED,
} from '../Types';

const INITIAL_STATE = {
    key: [],
    logged: false,
    loading: false,
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                loading: true,
            };
        case AUTH_REGISTER:
            return {
                ...state,
                key: action.payload,
                logged: true,
                loading: false,
            };
        case AUTH_LOGIN:
            return {
                ...state,
                key: action.payload,
                logged: true,
                loading: false,
            };
        case AUTH_FAILED:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
