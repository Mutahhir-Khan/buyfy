import { firestore, serverTimestamp } from "./../../Firebase/Firebase";
import history from "./../../History/history";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51Ifio9FVd0QvRm2UuuE8VuZdPKI2DYxAgFThXhrS6KPrbxWRWEcXGNFu8n0kqCuFEwZrDNv3M4FRobXyrD1hAiMc00DPAUSlWG");


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

export var processOrder = ({ cart, orderId, addressInfo }) => async (dispatch, getState) => {
  try {
      //TODO: to remove this hard coded orderId
    const stripe = await stripePromise;

    var orderId = "dYShsFf99ubLRvYmNi9t"
    var { auth } = getState();

    var orderedBy = auth.uid;
    await firestore.collection("/orders").doc(orderId).update({ cart, addressInfo});
    console.log("done updating");
    // var data = await axios.get("http://localhost:5001/mutahhirbuyfy/us-central1/generateCheckoutSession", {orderId}) 
    var response = await fetch("http://localhost:5001/mutahhirbuyfy/us-central1/generateCheckoutSession", {
        method:"POST",
        body: JSON.stringify({orderId})
    })
    var {data: {session}} = await response.json()
    // console.log(session)
    
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
       

  } catch (error) {
    console.log(error.message);
  }
};
