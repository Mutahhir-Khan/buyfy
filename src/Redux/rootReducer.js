import { combineReducers } from "redux";
import authReducer from './authRedux/authReducer';
import productReducer from './product/productReducer';
import cartReducer from './cart/cartReducer';
import modalReducer from './modal/modalReducer';

var rootReducer = combineReducers({
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    modal: modalReducer
})


export default rootReducer