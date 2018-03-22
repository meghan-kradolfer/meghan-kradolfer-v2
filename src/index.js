import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from 'react-ga';

import App from "./containers/App";
import "./index.css";

ReactGA.initialize('UA-51792737-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById("root")
);
