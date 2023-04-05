import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.min.js';
// internal
import ScrollTop from "./components/common/ScrollTop";
import "./index.css";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ScrollTop />
  {/* <React.StrictMode> */}
  <App />
  {/* </React.StrictMode> */}
</BrowserRouter>
);

