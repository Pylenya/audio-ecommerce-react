import React from "react";
import "./itemimages.scss";
export const ItemImages = ({ images }) => {
  let firstIMG = images.first;
  let secondIMG = images.second;
  let thirdIMG = images.third;
  return (
    <section className="item-images">
      <div className="container">
        <div className="item-images__grid">
          <picture className="img-first">
            <source
              media="(max-width:479px)"
              srcSet={require(`../../../images/${firstIMG.mobile}`)}
            />
            <source
              media="(max-width:991px)"
              srcSet={require(`../../../images/${firstIMG.tablet}`)}
            />
            <img src={require(`../../../images/${firstIMG.desktop}`)} />
          </picture>
          <picture className="img-second">
            <source
              media="(max-width:479px)"
              srcSet={require(`../../../images/${secondIMG.mobile}`)}
            />
            <source
              media="(max-width:991px)"
              srcSet={require(`../../../images/${secondIMG.tablet}`)}
            />
            <img src={require(`../../../images/${secondIMG.desktop}`)} />
          </picture>
          <picture className="img-third">
            <source
              media="(max-width:479px)"
              srcSet={require(`../../../images/${thirdIMG.mobile}`)}
            />
            <source
              media="(max-width:991px)"
              srcSet={require(`../../../images/${thirdIMG.tablet}`)}
            />
            <img src={require(`../../../images/${thirdIMG.desktop}`)} />
          </picture>
        </div>
      </div>
    </section>
  );
};
export default ItemImages;
