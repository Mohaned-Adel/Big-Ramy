import React from "react";
import "./Header.scss";
import LogoWrapper from "../LogoWrapper/LogoWrapper";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import NavBar from "../NavBar/NavBar";
import AuthWrapper from "../AuthWrapper/AuthWrapper";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <div className="header flex flex-col">
      <div className="container mx-auto px-6 py-2">
        <LanguageSwitch />
      </div>
      <hr className="lang-line-break" />
      <div className="container mx-auto px-6 my-6 flex justify-between items-center">
        <LogoWrapper />
        <AuthWrapper />
      </div>
      <div className="navbar-wrapper">
        <div className="container mx-auto px-6 my-2 flex justify-between items-center">
          <NavBar />
          <div className="cart-wrapper flex items-center justify-between gap-2">
            <span className="cart-icon">
              <AiOutlineShoppingCart />
            </span>
            <span>Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
}
