import { firestore, serverTimestamp } from "./../../Firebase/Firebase";
import history from "./../../History/history";

export var generateOrder = () => async (dispatch, getState) => {
  try {
    var { auth, cart: products } = getState();
    if (auth) {
      var orderInfo = {
        orderedBy: auth.uid,
        createdAt: serverTimestamp(),
        orderStatus: "pending",
      };
      var order = await firestore.collection("orders").add(orderInfo);
      history.push(`/checkout/${order.id}`);
      console.log(history);
    }
  } catch (error) {
    console.log(error);
  }
};

export var updateOrderInfo = ({ cart, orderId, addressInfo }) => async (dispatch, getState) => {
  try {
    var { auth } = getState();

    var orderedBy = auth.uid;
    console.log(`resource.data:  ${{ cart, addressInfo, orderedBy }}`);
    console.log(`orderId: ${orderId}`);
    await firestore.collection("/orders").doc(orderId).update({ cart, addressInfo});
    console.log("done updating");
    
  } catch (error) {
    console.log(error.message);
  }
};
