import React from "react";
import desctopIMG from "../../images/home/desktop/image-earphones-yx1.jpg";
import tabletIMG from "../../images/home/tablet/image-earphones-yx1.jpg";
import mobileIMG from "../../images/home/mobile/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";
import "./yx1earphones.scss";
import Button from "../Button/Button";
function YX1Earphones() {
  return (
    <section className="yx1earphones">
      <div className="container">
        <div className="yx1earphones__box">
          <picture>
            <source media="(max-width:480px)" srcSet={mobileIMG} />
            <source media="(max-width:999px)" srcSet={tabletIMG} />
            <img
              className="yx1earphones__img"
              src={desctopIMG}
              alt="yx1earphones"
            />
          </picture>
          <div className="yx1earphones__text">
            <div className="yx1earphones__text-box">
              <h2 className="yx1earphones__title">yx1 earphones</h2>
              <Link
                state={{ type: "earphones", slug: "yx1-earphones" }}
                to={"/earphones/yx1-earphones"}
              >
                <Button color="transparent">SEE PRODUCT</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default YX1Earphones;
