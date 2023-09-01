import React from "react";
import Headphones from "./components/Pages/Headphones";
import Home from "./components/Pages/Home";
import "./style.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import Speakers from "./components/Pages/Speakers";
import Earphones from "./components/Pages/Earphones";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
// rooter сделать и адаптив
