import React from 'react'
import { connect } from 'react-redux';
import { addToCart, removeFromCart, deleteFromCart } from './../../Redux/cart/cartActions';

const ProductCard = ({ addToCart, removeFromCart, deleteFromCart, ...product }) => {
    var { title, cost } = product
    return (
        <div>
            <h3>{title} - {`$${cost}`} <button onClick={() => addToCart(product)}>ADD TO CART</button> -- <button onClick={() => removeFromCart(product.id)}>REMOVE TO CART</button> -- <button onClick={() => deleteFromCart(product.id)}>DELETE THE ENTIRE ITEM</button></h3>
        </div>
    )
}

var actions = {
    addToCart,
    removeFromCart,
    deleteFromCart,
}

export default connect(null, actions)(ProductCard)
