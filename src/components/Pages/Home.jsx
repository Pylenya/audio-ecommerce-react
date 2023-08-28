import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ProductList from "../ProductList/ProductList";
import ZX9Speaker from "../ZX9Speaker/ZX9Speaker";
import ZX7Speaker from "../ZX7Speaker/ZX7Speaker";
import YX1Earphones from "../YX1Earphones/YX1Earphones";
import BestGear from "../BestGear/BestGear";
import Footer from "../Footer/Footer";
export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ProductList />
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
      <BestGear />
      <Footer />
    </>
  );
};
export default Home;
