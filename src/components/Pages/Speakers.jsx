import React from "react";
import Header from "../Header/Header";
import PageTitle from "../PageTitle/PageTitle";
import ItemList from "../ItemList/ItemList";
import data from "../../data/speakersData.json";
import ProductList from "../ProductList/ProductList";
import BestGear from "../BestGear/BestGear";
import Footer from "../Footer/Footer";
export const Speakers = () => {
  return (
    <>
      <Header />
      <PageTitle title={"speakers"} />
      <ItemList data={data} />
      <ProductList />
      <BestGear />
      <Footer />
    </>
  );
};
export default Speakers;
