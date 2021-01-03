import React from 'react'
import { connect } from 'react-redux';
import CheckoutListItems from './../CheckoutListItems/CheckoutListItems';

const CheckoutList = ({cartItems}) => {
    console.log(cartItems)
    return (
        <div>
            <h1>cart list </h1>
            {cartItems.map(item => <CheckoutListItems key={item.id} {...item}/>)}
        </div>
    )
}
var mapState = (state) => ({
    cartItems: state.cart
})

export default  connect(mapState, null)(CheckoutList)
