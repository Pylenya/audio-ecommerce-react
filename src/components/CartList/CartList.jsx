import React, { useEffect, useState } from "react";
import "./cartlist.scss";
import CartItem from "./CartItem";
import Button from "../Button/Button";
export const CartList = () => {
  let temp = Object.values(localStorage);
  let tempArr = [];
  temp.map((item) => {
    tempArr.push(JSON.parse(item));
  });
  const [itemArray, setItemArray] = useState([...tempArr]);
  const [totalItemsPrice, setTotalItemsPrice] = useState(
    Object.values(localStorage).map(
      (item) => JSON.parse(item).price * JSON.parse(item).quantity
    )
  );
  const [itemPrice, setItemPrice] = useState(true);
  const setflag = () => {
    itemPrice === true ? setItemPrice(false) : setItemPrice(true);
  };

  useEffect(() => {
    setTotalItemsPrice(
      Object.values(localStorage).map(
        (item) => JSON.parse(item).price * JSON.parse(item).quantity
      )
    );
  }, [itemPrice]);

  const deleteCartItem = (deleteId) => {
    setItemArray(itemArray.filter((item) => item.id !== deleteId));
  };
  return (
    <section className="cart-list">
      <div className="container">
        <h1 className="cart-list__title">CART</h1>
        <div className="cart-list-items">
          {itemArray.map((item) => {
            return (
              <CartItem
                id={item.id}
                key={item.id}
                name={item.name}
                img={item.cartImage}
                price={item.price}
                quantity={item.quantity}
                deleteCartItem={deleteCartItem}
                setflag={setflag}
              />
            );
          })}
        </div>
        {itemArray.length > 0 ? (
          <div className="totalprice">
            TOTAL PRICE: $ {totalItemsPrice.reduce((acc, item) => acc + item)}
            <Button color={"orange"}>checkout</Button>
          </div>
        ) : (
          <div className="empty-cart">
            <div className="empty-cart__title">
              <h1>Your cart is empty</h1>
              <div className="empty-cart__bg"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default CartList;
