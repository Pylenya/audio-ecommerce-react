import React from "react";
import desctopIMG from "../../images/shared/desktop/image-best-gear.jpg";
import tabletIMG from "../../images/shared/tablet/image-best-gear.jpg";
import mobileIMG from "../../images/shared/mobile/image-best-gear.jpg";
import "./bestgear.scss";

export const BestGear = () => {
  return (
    <section className="bestgear">
      <div className="container">
        <div className="bestgear__box">
          <div className="bestgear__text">
            <div className="bestgear__title">
              <h3>
                BRINGING YOU THE <span>BEST</span> AUDIO GEAR
              </h3>
            </div>
            <div className="bestgear__desc">
              <p>
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </div>
          </div>
          <picture>
            <source media="(max-width:480px)" srcSet={mobileIMG} />
            <source media="(max-width:999px)" srcSet={tabletIMG} />
            <img
              className="bestgear__img"
              src={desctopIMG}
              alt="man listening to music with headphones"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
export default BestGear;
