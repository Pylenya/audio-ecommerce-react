import React from "react";
import Card from "./Card/Card.jsx";
import "./productlist.scss";
import headphonesImg from "../../images/shared/desktop/image-headphones.png";
import speakersImg from "../../images/shared/desktop/image-speakers.png";
import earphonesImg from "../../images/shared/desktop/image-earphones.png";

export const ProductList = () => {
  return (
    <section className="product-list">
      <div className="container">
        <div className="product-list__box">
          <Card image={headphonesImg} title={"HEADPHONES"} />
          <Card image={speakersImg} title={"SPEAKERS"} />
          <Card image={earphonesImg} title={"EARPHONES"} />
        </div>
      </div>
    </section>
  );
};
export default ProductList;
