import { combineReducers } from 'redux';
import { ContactReducer } from './ContactReducer';
import { AuthReducer } from './AuthReducer';

export default combineReducers({
    contact: ContactReducer,
    auth: AuthReducer,
});
