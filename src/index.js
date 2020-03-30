import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "../src/baseStyle";

import Home from "./views/Home";
import Work from "./views/Work";

const MainApp = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/work" component={Work} />
  </Router>
);

ReactDOM.render(<MainApp />, document.getElementById("root"));
