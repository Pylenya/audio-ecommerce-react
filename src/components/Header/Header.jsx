import React from "react";
import "./header.scss";
import Logo from "../Logo/Logo";
import cartLogo from "../../images/shared/desktop/icon-cart.svg";
export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__img">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__items">
              <li className="header__item">
                <a className="header__item-link" href="!#">
                  Home
                </a>
              </li>
              <li className="header__item">
                <a className="header__item-link" href="!#">
                  Headphones
                </a>
              </li>
              <li className="header__item">
                <a className="header__item-link" href="!#">
                  Speakers
                </a>
              </li>
              <li className="header__item">
                <a className="header__item-link" href="!#">
                  Earphones
                </a>
              </li>
            </ul>
          </nav>
          <div className="header__img-cart">
            <img src={cartLogo} alt="cart" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
