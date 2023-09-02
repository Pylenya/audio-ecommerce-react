import React from "react";
import ItemBox from "../../ItemBox/ItemBox";
export const ItemMainContent = ({ itemData }) => {
  return (
    <section className="item-main-content">
      <div className="container">
        <ItemBox
          requireDesktopIMG={itemData?.image?.desktop}
          requireTabletIMG={itemData?.image?.tablet}
          requireMobileIMG={itemData?.image?.mobile}
          title={itemData?.name}
          desc={itemData?.description}
          price={itemData?.price}
          slug={itemData?.slug}
          type={itemData}
          id={itemData?.id}
          details={true}
        />
      </div>
    </section>
  );
};
export default ItemMainContent;
