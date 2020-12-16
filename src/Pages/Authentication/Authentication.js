import React from "react";
import SignupForm from "./../../Components/SignupForm/SignupForm";
import SigninForm from "./../../Components/SigninForm/SigninForm";
import Signout from "./../../Components/Signout/Signout";
import GoogleSignin from './../../Components/GoogleSignin/GoogleSignin';

const Authentication = () => {
  return (
    <div>
      <h1>Authentication Page</h1>
      <SigninForm />
      <SignupForm />
      <Signout />
      <GoogleSignin/>
    </div>
  );
};

export default Authentication;
