import React from 'react'
import { connect } from 'react-redux';
import { addToCart} from './../../Redux/cart/cartActions';

const ProductCard = ({ addToCart, removeFromCart, deleteFromCart, ...product }) => {
    var { title, cost } = product
    return (
        <div>
            <h3>{title} - {`$${cost}`} <button onClick={() => addToCart(product)}>ADD TO CART</button> </h3>
        </div>
    )
}

var actions = {
    addToCart,
}

export default connect(null, actions)(ProductCard)
