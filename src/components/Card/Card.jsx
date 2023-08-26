import React from "react";
import "./card.scss";
export const Card = ({ title, image }) => {
  return (
    <div className="card">
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
    </div>
  );
};
export default Card;
