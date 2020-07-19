import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILED,
    ADD_ITEM,
} from '../Types';

const INITIAL_STATE = {
    contactList: [],
    loading: false,
};

export const ContactReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                contactList: action.payload,
                loading: false,
            };
        case ADD_ITEM:
            return {
                ...state,
                contactList: [...state.contactList, action.payload],
            };
        case FETCH_FAILED:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    }
};
