import { combineReducers } from 'redux';
import userReducer from './user/user.rducer';

export default combineReducers({
    user: userReducer
})