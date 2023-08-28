import React from "react";
import desctopIMG from "../../images/home/desktop/image-speaker-zx9.png";
import tabletIMG from "../../images/home/tablet/image-speaker-zx9.png";
import mobileIMG from "../../images/home/mobile/image-speaker-zx9.png";
import "./zx9speaker.scss";
import Button from "../Button/Button";
function ZX9Speaker() {
  return (
    <section className="zx9speaker">
      <div className="container">
        <div className="zx9speaker__box">
          <picture>
            <source media="(max-width:480px)" srcSet={mobileIMG} />
            <source media="(max-width:999px)" srcSet={tabletIMG} />
            <img
              className="zx9speaker__img"
              src={desctopIMG}
              alt="zx9speaker"
            />
          </picture>
          <div className="zx9speaker__text">
            <h2 className="zx9speaker__title">ZX9 SPEAKER</h2>
            <p className="zx9speaker__desc">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button color={"black"}>See product</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ZX9Speaker;
