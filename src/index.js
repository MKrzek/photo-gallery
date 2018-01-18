import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store.js";
import registerServiceWorker from "./registerServiceWorker";
import './index.css'
import App from "./components/App.js";


const store = configureStore();
console.log("store", store);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
