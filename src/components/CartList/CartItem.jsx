import React, { useEffect } from "react";
import "./cartitem.scss";
import { useState } from "react";
export const CartItem = ({
  id,
  name,
  img,
  price,
  quantity,
  deleteCartItem,
  setflag,
}) => {
  const [totalQuantity, setTotalQuantity] = useState(quantity);
  useEffect(() => {
    setflag();
  }, [totalQuantity]);

  const increaseQuantity = () => {
    setTotalQuantity(totalQuantity + 1);
    let temp = JSON.parse(localStorage[id]);
    temp.quantity = totalQuantity + 1;
    let jsonTemp = JSON.stringify(temp);
    localStorage[id] = jsonTemp;
    jsonTemp = "";
  };
  const decreaseQuantity = () => {
    if (totalQuantity > 1) {
      setTotalQuantity(totalQuantity - 1);
      let temp = JSON.parse(localStorage[id]);
      temp.quantity = totalQuantity - 1;
      let jsonTemp = JSON.stringify(temp);
      localStorage[id] = jsonTemp;
      jsonTemp = "";
    } else {
      deleteCartItem(id);
      localStorage.removeItem(id);
      setflag();
    }
  };
  return (
    <div className="cart-item">
      <div className="cart-item__left">
        <div className="cart-item__name">{name}</div>
        <div className="cart-item__price">Price: ${price}</div>
        <img
          className="cart-item__img"
          src={require(`../../images/${img}`)}
          alt={name}
        />
      </div>
      <div className="cart-item__right">
        <div className="cart-item__quantity">
          <button onClick={decreaseQuantity} className="cart-btn">
            -
          </button>
          <div className="number-quantity">{totalQuantity}</div>
          <button onClick={increaseQuantity} className="cart-btn">
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
