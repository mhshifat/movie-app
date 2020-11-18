import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./routes";

const root = (
  <Fragment>
    <Routes />
  </Fragment>
);

ReactDOM.render(root, document.getElementById("root"));
