import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router } from "react-router-dom";
import store from "./Redux/store";
import { Provider } from "react-redux";
import history from './History/history';
import ModalManager from "./Components/ModalManager/ModalManager";

ReactDOM.render(
  <React.StrictMode>
    <Router history ={history}>
      <Provider store={store}>
        <ModalManager/>
        <App />
      </Provider>
    </Router >
  </React.StrictMode>,
  document.getElementById("root")
);
