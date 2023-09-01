import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";
export const Card = ({ title, image, link }) => {
  return (
    <Link
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      to={link}
      className="card"
    >
      <div className="card__box">
        <div className="card__img">
          <img src={image} alt={title} />
        </div>
        <div className="card__title">
          <span>{title}</span>
        </div>
        <div className="card__subtitle">
          <span>SHOP</span>
        </div>
      </div>
    </Link>
  );
};
export default Card;
