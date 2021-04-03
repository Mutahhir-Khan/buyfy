import React from "react";
import { connect } from "react-redux";
import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from "./../../Redux/cart/cartActions";
import "./CheckoutListItems.css";

const CheckoutListItems = ({
  addToCart,
  removeFromCart,
  deleteFromCart,
  ...product
}) => {
  var { title, cost, cartQuantity, id } = product;
  console.log(title, cost, cartQuantity, id);
  return (
    <div className="checkout-list-item">
      <div className="checkout-item-product">
        <div className="checkout-item-product-image"></div>
        <Paragraph>my product</Paragraph>
      </div>
      <div className="checkout-item-quantity center">
        <Button
          style={{
            borderTopLeftRadius: "50%",
            borderBottomLeftRadius: "50%",
            transform: "translateX(7px)",
          }}
          fontWeight="bold"
        >
          +
        </Button>
        <Button fontWeight="bold">3</Button>
        <Button
          style={{
            borderTopRightRadius: "50%",
            borderBottomRightRadius: "50%",
            transform: "translateX(-7px)",

          }}
          fontWeight="bold"
        >
          -
        </Button>
      </div>
      <div className="checkout-item-price center"><Paragraph  fontSize={20} fontWeight="bold">$ 240</Paragraph></div>
      <div className="checkout-item-cancellation center"><Paragraph style={{cursor: "pointer"}} fontSize={20} fontWeight="bold">X</Paragraph></div>
      {/* *************************
            <h1>{title} - {cost} - <button onClick={() => deleteFromCart(id)}> X </button></h1>
            <h2><button onClick={() => (addToCart(product))}> + </button> {cartQuantity} <button onClick={() => removeFromCart(id)}> - </button></h2> */}
    </div>
  );
};

var actions = {
  addToCart,
  removeFromCart,
  deleteFromCart,
};

export default connect(null, actions)(CheckoutListItems);
