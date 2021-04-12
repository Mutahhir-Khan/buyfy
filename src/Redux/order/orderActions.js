import { firestore, serverTimestamp} from './../../Firebase/Firebase';
import history from './../../History/history';

export var generateOrder = () => async (dispatch, getState) => {
    try {
        var {auth, cart: products} = getState()
        if(auth) {
            var orderInfo = {
                orderedBy: auth.uid,
                createdAt: serverTimestamp(),
                orderStatus: 'pending'
            }
            var order = await firestore.collection("orders").add(orderInfo)
            // console.log(order.id)
            history.push(`checkout/${order.id}`)
        }

    } catch (error) {
        console.log(error)
    }
}

export var updateOrderInfo = (cart, orderId, addressInfo) => async (dispatch, getState) => {
    try {
        var {auth} = getState()
        // console.log(orderId)
        // console.log(cart)
        // console.log(addressInfo)
        var orderedBy = auth.uid
        console.log(cart, addressInfo, orderedBy)
        await firestore.collection("orders").doc(orderId).update({cart, addressInfo, orderedBy})
        console.log('done updating')
        
    } catch (error) {
        console.log(error.message)
    }
}