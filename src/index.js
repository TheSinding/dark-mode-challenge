import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/AppContainer";
import App from "./components/App";
import "./sass/_main.scss";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>,
  document.getElementById("root")
);
