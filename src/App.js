import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Authentication from "./Pages/Authentication/Authentication";
import Category from "./Pages/Category/Category";
import CategoryProducts from "./Pages/CategoryProducts/CategoryProducts";
import Checkout from "./Pages/Checkout/Checkout";
import { useEffect } from "react";
import { connect } from 'react-redux';
import { authListener } from './Redux/authRedux/authActions';
import Test from './Pages/Test/Test';
import Navbar from './Components/Navbar/Navbar';


var App = ({ authListener }) => {
  useEffect(() => {
    authListener()

  }, [authListener])
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/authentication" component={Authentication} />
        <Route path="/categories" component={Category} />
        <Route path="/category-products" component={CategoryProducts} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>

  );
};

var actions = {
  authListener
}

export default connect(null, actions)(App);
