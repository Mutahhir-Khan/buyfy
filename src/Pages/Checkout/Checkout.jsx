import React, {useState} from 'react'
import CheckoutList from '../../Components/CheckoutList/CheckoutList'
import { totalAmount } from '../../Utility/checkout';
import { connect } from 'react-redux';
import OrderForm from '../../Components/OrderForm/OrderForm';
import "./Checkout.css"
import Header from './../../Components/Header/Header';
import Button from './../../Components/Button/Button';

const Checkout = ({total}) => {
    const [shipFormShown, setshipFormShown] = useState(false)
    return (
        <div className="checkout-page-container">
            <div className="checkout">
                {/* <h1>Checkout Page</h1> */}
                <Header fontWeight="bold" fontSize={20}>Shopping Cart</Header>
                <CheckoutList/>
                <div className="checkout-bottom-content">
                    <Header fontSize={24} fontWeight="semi-bold">Amount To Pay: &nbsp; <b>{`$${total}`}</b></Header>
                    <Button style={{justifySelf:"end"}}> Proceed n Pay</Button>
                </div>
                {/* <h3>Total Amount {`$${total}`}</h3> */}
                {/* <button onClick={() => setshipFormShown(!shipFormShown)}>PROCEDD & PAY </button> --{total} */}
                {/* {shipFormShown && < OrderForm/>} */}
            </div>
        </div>
    )
}

var mapState = (state) => ({
    total: totalAmount(state.cart)
})

export default connect(mapState)(Checkout)
