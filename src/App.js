import React, {Fragment} from "react";
import './App.css';
import HomePage from "./Pages/homepage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./Pages/login";
import SignUp from "./Pages/createaccount";
import Admin from "./Pages/admin";
import Checkout from "./Components/Checkout";

function App() {
  return <Fragment>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/newuser" element={<SignUp />} />
       <Route path="/home" element={<HomePage />} />
       <Route path="/admin" element={<Admin />} />
       <Route path="/checkout" element={<Checkout />} />
    </Routes>
    </BrowserRouter>

  </Fragment>;
}

export default App;
