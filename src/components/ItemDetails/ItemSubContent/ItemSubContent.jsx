import React from "react";
import "./itemsubcontent.scss";
export const ItemSubContent = ({ features, includedItems }) => {
  return (
    <section className="item-sub-content">
      <div className="container">
        <div className="item-sub-details__grid">
          <div className="features">
            <h1 className="features__title">features</h1>
            <div className="features__desc">
              <p>{features}</p>
            </div>
          </div>
          <div className="in-the-box">
            <div className="in-the-box__title">
              <h2>in the box</h2>
            </div>
            <ul className="in-the-box__list">
              {includedItems.map((item, index) => {
                return (
                  <li key={index}>
                    <span className="quantity">{item.quantity}x</span>
                    {item.item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ItemSubContent;
