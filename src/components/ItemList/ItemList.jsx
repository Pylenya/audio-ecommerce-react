import React from "react";
import "./itemlist.scss";
import ItemBox from "../ItemBox/ItemBox";
export const ItemList = ({ data, type }) => {
  return (
    <section className="items">
      <div className="container">
        {data.map((item, index) => {
          return (
            <ItemBox
              key={item.id}
              odd={(index + 1) % 2 === 0 ? "odd" : ""}
              requireDesktopIMG={item.image.desktop}
              requireTabletIMG={item.image.tablet}
              requireMobileIMG={item.image.mobile}
              title={item.name}
              desc={item.description}
              price={item.price}
              slug={item.slug}
              type={type}
              id={item.id}
            />
          );
        })}
      </div>
    </section>
  );
};
export default ItemList;
