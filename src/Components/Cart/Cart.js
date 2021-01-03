import React from 'react'
import CartList from './../CartList/CartList';
import Checkout from './../../Pages/Checkout/Checkout';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div>
            <h1>cart</h1>
            <CartList/>
            <Link to="/checkout">
                <button>CHECK OUT</button>
            </Link>
        </div>
    )
}

export default Cart
