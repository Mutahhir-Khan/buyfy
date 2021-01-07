import React, {useState} from 'react'
import CheckoutList from '../../Components/CheckoutList/CheckoutList'
import { totalAmount } from './../../Utility/checkout';
import { connect } from 'react-redux';
import OrderForm from './../../Components/OrderForm/OrderForm';

const Checkout = ({total}) => {
    const [shipFormShown, setshipFormShown] = useState(false)
    return (
        <div>
            <h1>Checkout Page</h1>
            <CheckoutList/>
            <h3>Total Amount {`$${total}`}</h3>
            <button onClick={() => setshipFormShown(!shipFormShown)}>PROCEDD & PAY </button> --{total}
            {shipFormShown && < OrderForm/>}
        </div>
    )
}

var mapState = (state) => ({
    total: totalAmount(state.cart)
})

export default connect(mapState)(Checkout)
