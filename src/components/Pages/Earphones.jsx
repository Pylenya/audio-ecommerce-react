import React from "react";
import Header from "../Header/Header";
import PageTitle from "../PageTitle/PageTitle";
import ItemList from "../ItemList/ItemList";
import data from "../../data/earphonesData.json";
import ProductList from "../ProductList/ProductList";
import BestGear from "../BestGear/BestGear";
import Footer from "../Footer/Footer";
export const Earphones = () => {
  return (
    <>
      <Header />
      <PageTitle title={"earphones"} />
      <ItemList data={data} type={"earphones"} />
      <ProductList />
      <BestGear />
      <Footer />
    </>
  );
};
export default Earphones;
