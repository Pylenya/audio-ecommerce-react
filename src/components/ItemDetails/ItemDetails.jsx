import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import ItemMainContent from "./itemMainContent/ItemMainContent";
import ItemSubContent from "./ItemSubContent/ItemSubContent";
import ItemImages from "./ItemImages/ItemImages";
import Others from "../Others/Others";
import ProductList from "../ProductList/ProductList";
import BestGear from "../BestGear/BestGear";
import Footer from "../Footer/Footer";
import "./itemdetails.scss";

export const ItemDetails = () => {
  const { state } = useLocation();
  const [allData] = useState(require("../../data/alldata.json"));
  const [itemData, setItemData] = useState();
  const filterBySlug = (slug, allDataSlug) => {
    let temp;
    for (let i = 0; i < allDataSlug.length; i++) {
      if (allDataSlug[i].slug === slug) {
        temp = allDataSlug[i];
      }
    }
    return temp;
  };
  useEffect(() => {
    let temp = filterBySlug(state.slug, allData);
    setItemData(temp);
  }, [state, allData]);
  return (
    <>
      {itemData && (
        <>
          <Header />
          <ItemMainContent itemData={itemData} />
          <ItemSubContent
            features={itemData?.features}
            includedItems={itemData?.includedItems}
          />
          <ItemImages images={itemData?.gallery} />
          <Others items={itemData?.others} />
          <ProductList />
          <BestGear />
          <Footer />
        </>
      )}
    </>
  );
};
export default ItemDetails;
