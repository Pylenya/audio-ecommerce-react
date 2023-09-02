import React from "react";
import "./others.scss";
import ItemAlsoLike from "./ItemAlsoLike/ItemAlsoLike";
export const Others = ({ items }) => {
  return (
    <section className="others">
      <div className="container">
        <div className="others__title">
          <h2>you may also like</h2>
        </div>
        <div className="others__items">
          {items.map((item, index) => {
            return (
              <ItemAlsoLike
                key={index}
                img={item.image}
                title={item.name}
                slug={item.slug}
                type={item.type}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Others;
