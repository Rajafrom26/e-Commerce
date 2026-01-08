import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/HomePage";
import Product from "../Components/product";
import Cart from "../Components/Cart";
import About from "../Components/About";
import Contact from "../Components/Contact";

const Routings = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routings;
