import React from "react";
import desctopIMG from "../../images/home/desktop/image-earphones-yx1.jpg";
import tabletIMG from "../../images/home/tablet/image-earphones-yx1.jpg";
import mobileIMG from "../../images/home/mobile/image-earphones-yx1.jpg";
import "./yx1earphones.scss";
import Button from "../Button/Button";
function YX1Earphones() {
  return (
    <section className="yx1earphones">
      <div className="container">
        <div className="yx1earphones__box">
          <picture>
            <source media="(max-width:480px)" srcset={mobileIMG} />
            <source media="(max-width:999px)" srcset={tabletIMG} />
            <img
              className="yx1earphones__img"
              src={desctopIMG}
              alt="yx1earphones"
            />
          </picture>
          <div className="yx1earphones__text">
            <div className="yx1earphones__text-box">
              <h2 className="yx1earphones__title">yx1 earphones</h2>
              <Button color={"transparent"}>See product</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default YX1Earphones;
