import React from "react";
import Header from "../Header/Header";
import PageTitle from "../PageTitle/PageTitle";
import ItemList from "../ItemList/ItemList";
import data from "../../data/headphonesData.json";
import ProductList from "../ProductList/ProductList";
import BestGear from "../BestGear/BestGear";
import Footer from "../Footer/Footer";
export const Headphones = () => {
  return (
    <>
      <Header />
      <PageTitle title={"headphones"} />
      <ItemList data={data} type={"headphones"} />
      <ProductList />
      <BestGear />
      <Footer />
    </>
  );
};
export default Headphones;
