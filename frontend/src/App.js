import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./mainlayout/Main";
import Header from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";
import Profile from "./Pages/auth/Profile";
import Signup from "./Pages/auth/Signup";
import Cartpage from "./Pages/Cartpage";
import Home from "./Pages/Home";
import ProductInfo from "./Pages/ProductInfo";
import ContactUs from "./Pages/ContactUs";
import Account from "./Pages/auth/Account";
import RazorpayButton from "./Pages/RozapayButton";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/productinfo/:slug" element={<ProductInfo />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/account" element={<Account />} />
          <Route path="/rozapay" element={<RazorpayButton/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
