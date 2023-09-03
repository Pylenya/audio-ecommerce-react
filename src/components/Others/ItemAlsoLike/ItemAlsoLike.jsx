import React from "react";
import "./itemalsolike.scss";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
export const ItemAlsoLike = ({ img, title, slug, type }) => {
  return (
    <div className="item-also-like">
      <picture>
        <source
          media="(max-width:770px)"
          srcSet={require(`../../../images/${img.mobile}`)}
        />
        <source
          media="(max-width:1000px)"
          srcSet={require(`../../../images/${img.tablet}`)}
        />
        <img
          className="item-also-like__img"
          src={require(`../../../images/${img.desktop}`)}
          alt={title}
        />
      </picture>
      <div className="item-also-like__title">
        <h3>{title}</h3>
      </div>
      <Link
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        state={{ type: type, slug: slug }}
        to={`/${type}/${slug}`}
      >
        <Button color={"orange"}>see product</Button>
      </Link>
    </div>
  );
};
export default ItemAlsoLike;
