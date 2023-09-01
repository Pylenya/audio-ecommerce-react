import React from "react";
import "./itembox.scss";
import Button from "../Button/Button";
export const ItemBox = ({
  requireDesktopIMG,
  requireTabletIMG,
  requireMobileIMG,
  title,
  desc,
  odd,
}) => {
  return (
    <div className={`item ${odd}`}>
      <picture>
        <source
          media="(max-width:479px)"
          srcSet={require(`../../images/${requireMobileIMG}`)}
        />
        <source
          media="(max-width:991px)"
          srcSet={require(`../../images/${requireTabletIMG}`)}
        />
        <img
          className="item__img"
          src={require(`../../images/${requireDesktopIMG}`)}
          alt={title}
        />
      </picture>
      <div className="item__text">
        <div className="item__subtitle">
          <span>NEW PRODUCT</span>
        </div>
        <div className="item__title">
          <span>{title}</span>
        </div>
        <div className="item__desc">
          <p>{desc}</p>
        </div>
        <Button color={"orange"}>see product</Button>
      </div>
    </div>
  );
};
export default ItemBox;
