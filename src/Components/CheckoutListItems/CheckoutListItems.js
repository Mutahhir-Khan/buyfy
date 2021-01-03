import React from 'react'
import { connect } from 'react-redux';
import { addToCart, deleteFromCart, removeFromCart } from './../../Redux/cart/cartActions';

const CheckoutListItems = ({ addToCart, removeFromCart, deleteFromCart, ...product }) => {
    var { title, cost, cartQuantity, id } = product
    console.log(title, cost, cartQuantity, id)
    return (
        <div>
            *************************
            <h1>{title} - {cost} - <button onClick={() => deleteFromCart(id)}> X </button></h1>
            <h2><button onClick={() => (addToCart(product))}> + </button> {cartQuantity} <button onClick={() => removeFromCart(id)}> - </button></h2>
        </div>
    )
}

var actions = {
    addToCart,
    removeFromCart,
    deleteFromCart,
}

export default connect(null, actions)(CheckoutListItems)
