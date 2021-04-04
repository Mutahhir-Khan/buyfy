import React, { useState } from "react";
import Header from "../Header/Header";
import ModalContainer from "../ModalContainer/ModalContainer";
import "./AddressFormModal.css";
import { TextField } from "@material-ui/core";
import Button from "./../Button/Button";

const AddressFormModal = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [phone, setPhone] = useState("");

  var handleSubmit = (e) => {
      e.preventDefault()
      var shippingDetails = {
          fullName,
          fullAddress,
          email,
          phone
      }
      if (fullName && fullAddress && email && phone) {
          console.log(shippingDetails)
      }
      else alert("Please Fill out all the Fields ")
      var addressFieldsDiv = document.querySelector(".address-fields")
      console.log(addressFieldsDiv.childNodes)
  }
  return (
    <ModalContainer>
      <form onSubmit={handleSubmit} className="address-from-modal center">
        <Header>Address Entries Here</Header>
        <div className="address-fields">
          <div>
            <TextField
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={{ width: "100%", marginBottom:"1em" }}
              className="password"
              label="Password"
            ></TextField>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", marginBottom:"1em" }}
              className="email"
              label="Email"
            ></TextField>
          </div>
          <div>
            <TextField
              value={fullAddress}
              onChange={(e) => setFullAddress(e.target.value)}
              style={{ width: "100%", marginBottom:"1em" }}
              className="email"
              label="Email"
            ></TextField>
            <TextField
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ width: "100%", marginBottom:"1em" }}
              className="password"
              label="Password"
            ></TextField>
          </div>
        </div>

        <Button type="submit" style={{ marginTop: "2em", width: "40%" }}>
          Pay Now!
        </Button>
      </form>
    </ModalContainer>
  );
};

export default AddressFormModal;
