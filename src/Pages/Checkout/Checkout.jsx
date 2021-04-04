import React, {useState} from 'react'
import CheckoutList from '../../Components/CheckoutList/CheckoutList'
import { totalAmount } from '../../Utility/checkout';
import { connect } from 'react-redux';
import OrderForm from '../../Components/OrderForm/OrderForm';
import "./Checkout.css"
import Header from './../../Components/Header/Header';
import Button from './../../Components/Button/Button';
import { openModal } from './../../Redux/modal/modalActions';

const Checkout = ({total, openModal}) => {
    const [shipFormShown, setshipFormShown] = useState(false)
    return (
        <div className="checkout-page-container">
            <div className="checkout">
                {/* <h1>Checkout Page</h1> */}
                <Header fontWeight="bold" fontSize={20}>Shopping Cart</Header>
                <CheckoutList/>
                <div className="checkout-bottom-content">
                    <Header fontSize={24} fontWeight="semi-bold">Amount To Pay: &nbsp; <b>{`$${total}`}</b></Header>
                    <Button
                     onClick={() =>
                        openModal({ modalType: "addressFormModal"  })
                      }
                     style={{justifySelf:"end"}}> 
                     Proceed & Pay</Button>
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

var actions = {
    openModal
}
export default connect(mapState, actions)(Checkout)
