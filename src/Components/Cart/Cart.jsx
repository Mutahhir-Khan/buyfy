import React from 'react'
import CartList from '../CartList/CartList';
import Checkout from '../../Pages/Checkout/Checkout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { generateOrder } from '../../Redux/order/orderActions';

const Cart = ({ generateOrder }) => {
    return (
        <div>
            <h1>cart</h1>
            <CartList />
            <button onClick={generateOrder}>CHECK OUT</button>
        </div>
    )
}

var actions = {
    generateOrder
}

export default connect(null, actions)(Cart)
