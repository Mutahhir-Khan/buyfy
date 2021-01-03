import React from 'react'
import { connect } from 'react-redux';
import { addToCart} from './../../Redux/cart/cartActions';
import { Link } from 'react-router-dom';

const ProductCard = ({ addToCart, removeFromCart, deleteFromCart, ...product }) => {
    var { title, cost, id } = product
    return (
        <div>
            <h3> <Link to={`/product/${id}`}>{title}</Link> - {`$${cost}`} <button onClick={() => addToCart(product)}>ADD TO CART</button> </h3>
        </div>
    )
}

var actions = {
    addToCart,
}

export default connect(null, actions)(ProductCard)
