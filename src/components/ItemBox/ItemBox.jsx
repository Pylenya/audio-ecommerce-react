import React from "react";
import "./itembox.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
export const ItemBox = ({
  requireDesktopIMG,
  requireTabletIMG,
  requireMobileIMG,
  title,
  desc,
  odd,
  price,
  details,
  slug,
  type,
}) => {
  return (
    <div
      className={odd ? "item odd" : "item" && details ? "item details" : "item"}
    >
      <picture className="item__pic">
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
        {details ? <div className="item__price">$ {price}</div> : null}
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          state={{ type: type, slug: slug }}
          to={`/${type}/${slug}`}
        >
          <Button color={"orange"}>
            {details ? "add to cart" : "see product"}
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default ItemBox;
