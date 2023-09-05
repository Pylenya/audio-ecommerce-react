import React from "react";
import Headphones from "./components/Pages/Headphones";
import Home from "./components/Pages/Home";
import "./style.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import Speakers from "./components/Pages/Speakers";
import Earphones from "./components/Pages/Earphones";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import Cart from "./components/Pages/Cart";
function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/headphones" element={<Headphones />}></Route>
        <Route path="/headphones/:slug" element={<ItemDetails />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/speakers/:slug" element={<ItemDetails />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/earphones/:slug" element={<ItemDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default App;
