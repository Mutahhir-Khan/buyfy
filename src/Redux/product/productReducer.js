import {  SET_PRODUCT } from './productConstants';

var initalState = []

var productReducer = (state = initalState, action) => {
    var {type, payload} = action;
    switch (type) {
        case SET_PRODUCT:
            return [...payload.products]
    
        default:
            return state
    }

}

export default productReducer;