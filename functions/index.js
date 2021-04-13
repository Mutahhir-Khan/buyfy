const functions = require("firebase-functions");
const stripe = require("stripe")("sk_test_51Ifio9FVd0QvRm2UGxUbE32SNHyaHWyE7TrZnTai7CXsoso8C8hNLuo6ujEKgG05yNAWBvhjCizQkMZfsMLGmCrP00hGzkYvFY")
const admin = require("firebase-admin");
const { queryByRole } = require("@testing-library/dom");

admin.initializeApp()
const firestore = admin.firestore();



//auth triggers
exports.userCreated = functions.auth.user().onCreate((user) => {
  console.log(user);
  console.log("user created............");
  return Promise.resolve;
});

exports.userDeleted = functions.auth.user().onDelete((user) => {
  console.log(user);
  console.log("user deleted............");
  return Promise.resolve;
});

//firestore triggers
exports.orderAdded = functions.firestore.document("/orders/{docId}").onCreate((snap, context) => {
    console.log("Adding new order..........")
    console.log(`new order: ${snap.data()}`) // isme data hota he jo bana he
    console.log(`new order docId: ${context.params.docId}`)
    return Promise.resolve;
})

exports.orderUpdate = functions.firestore.document("/orders/{docId}").onUpdate((snap, context) => {
    console.log("updating order..........")
    console.log(`before: ${snap.before.data()}`)
    console.log(`after: ${snap.after.data()}`)
    console.log(`docId: ${context.params.docId}`)
    return Promise.resolve;
})

exports.orderDelete = functions.firestore.document("/orders/{docId}").onDelete((snap, context) => {
    console.log("deleting order..........")
    console.log(`deleted order: ${snap.data()}`) 
    console.log(`deleted docID: ${context.params.docId}`)
    return Promise.resolve;
})


//HTTPS trugger  (for making an API)
exports.welcomeUser = functions.https.onRequest((req, res) => {
    res.status(200).json({
        msg: "welcome to my website "
    })
    return Promise.resolve;
    
})

exports.sayHelloByName = functions.https.onRequest((req, res) => {
    var data = req.body;
    res.status(200).json({
        msg: `hello ${data.name}! welcome to my website`,
        email: `this is your email address: ${data.email}`
    })
    return Promise.resolve
})

// exports.generateCheckoutSession = (orderId) => {
    // console.log(orderID)

    //fetch order
    // var query = firestore.collection("orders").doc(orderId).get()
    // var data = query.data()

    //perform calculation
    //generate stripe session
    //send back that session
// }

exports.generateCheckoutSession = functions.https.onRequest( async (req, res) => {
    try {
        var {orderId} = req.body
        //fetch order
        var query = await firestore.collection("orders").doc(orderId).get()
        var order = query.data()
        res.status(200).json({
            data:{
                order
            }
        })
        //perform calculation
        //generate stripe session with that amount
        //send back that session

    } catch (error) {
        res.status(401).json({
            error
        })  
    }
})