import React from 'react'
import { connect } from 'react-redux';
import Paragraph from '../Paragraph/Paragraph';
import CheckoutListItems from './../CheckoutListItems/CheckoutListItems';
import "./CheckoutList.css"

const CheckoutList = ({cartItems}) => {
    // console.log(cartItems)
    return (
        <div className="checkout-list">
            {/* <h1>cart list </h1> */}
            <div className="checkout-list-item ">
                <Paragraph>Product</Paragraph>
                <Paragraph>Quantity</Paragraph>
                <Paragraph>Price</Paragraph>
            </div>
            {cartItems.map(item => <CheckoutListItems key={item.id} {...item}/>)}
        </div>
    )
}
var mapState = (state) => ({
    cartItems: state.cart
})

export default  connect(mapState, null)(CheckoutList)
