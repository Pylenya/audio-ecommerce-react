import React from "react";
import desctopIMG from "../../images/home/desktop/image-speaker-zx7.jpg";
import tabletIMG from "../../images/home/tablet/image-speaker-zx7.jpg";
import mobileIMG from "../../images/home/mobile/image-speaker-zx7.jpg";
import { Link } from "react-router-dom";
import "./zx7speaker.scss";
import Button from "../Button/Button";
function ZX7Speaker() {
  return (
    <section className="zx7speaker">
      <div className="container">
        <div className="zx7speaker__box">
          <picture>
            <source media="(max-width:479px)" srcSet={mobileIMG} />
            <source media="(max-width:991px)" srcSet={tabletIMG} />
            <img
              className="zx7speaker__img"
              src={desctopIMG}
              alt="zx7speaker"
            />
          </picture>
          <div className="zx7speaker__text">
            <h2 className="zx7speaker__title">ZX7 SPEAKER</h2>
            <Link
              state={{ type: "speakers", slug: "zx7-speaker" }}
              to={"/speakers/zx7-speaker"}
            >
              <Button color="transparent">SEE PRODUCT</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ZX7Speaker;
