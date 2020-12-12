import { combineReducers } from "redux";
import authReducer from './authRedux/authReducer';

var rootReducer = combineReducers({
    auth: authReducer
})


export default rootReducer