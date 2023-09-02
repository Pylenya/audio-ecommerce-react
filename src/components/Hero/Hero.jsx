import React from "react";
import "./hero.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="container">
          <div className="hero__text">
            <div className="hero__subtitle">
              <span>NEW PRODUCT</span>
            </div>
            <div className="hero__title">
              <h1>XX99 MARK II HEADPHONES</h1>
            </div>
            <div className="hero__desc">
              <p>
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
            </div>
            <Link
              state={{ type: "headphones", slug: "xx99-mark-two-headphones" }}
              to={"/headphones/xx99-mark-two-headphones"}
            >
              <Button color="orange">SEE PRODUCT</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
