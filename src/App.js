import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Authentication from "./Pages/Authentication/Authentication";
import Category from "./Pages/Category/Category";
import CategoryProducts from "./Pages/CategoryProducts/CategoryProducts";
import Checkout from "./Pages/Checkout/Checkout";

var App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/authentication" component={Authentication} />
      <Route path="/categories" component={Category} />
      <Route path="/category-products" component={CategoryProducts} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  );
};

export default App;
