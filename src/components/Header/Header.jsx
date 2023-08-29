import React, { useState } from "react";
import "./header.scss";
import Logo from "../Logo/Logo";
import cartLogo from "../../images/shared/desktop/icon-cart.svg";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <button
            className="mobile__btn"
            onClick={() => {
              setNav(!nav);
            }}
          >
            {nav ? (
              <AiOutlineClose size={25} color="white" />
            ) : (
              <AiOutlineMenu size={25} color="white" />
            )}
          </button>
          <nav
            className={nav ? "header__nav-burger active" : "header__nav-burger"}
          >
            <ul className="header__list-burger">
              <li className="header__item">
                <NavLink className="header__item-link" to="/home">
                  HOME
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink className="header__item-link" to="/headphones">
                  Headphones
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink className="header__item-link" to="/crew">
                  Speakers
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink className="header__item-link" to="/technology">
                  Earphones
                </NavLink>
              </li>
            </ul>
          </nav>
          <Link to="/home" className="header__img">
            <Logo />
          </Link>
          <nav className="header__nav">
            <ul className="header__items">
              <li className="header__item">
                <NavLink className="header__item-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink className="header__item-link" to="/headphones">
                  Headphones
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink className="header__item-link" to="/speakers">
                  Speakers
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink className="header__item-link" to="/earphones">
                  Earphones
                </NavLink>
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
