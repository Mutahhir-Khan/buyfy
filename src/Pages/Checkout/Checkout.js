import React from 'react'
import CheckoutList from '../../Components/CheckoutList/CheckoutList'
import { totalAmount } from './../../Utility/checkout';
import { connect } from 'react-redux';

const Checkout = ({total}) => {
    return (
        <div>
            <h1>Checkout Page</h1>
            <CheckoutList/>
            <h3>Total Amount {`$${total}`}</h3>
            
            <button>PAY NOW </button> --{total}
        </div>
    )
}

var mapState = (state) => ({
    total: totalAmount(state.cart)
})

export default connect(mapState)(Checkout)
