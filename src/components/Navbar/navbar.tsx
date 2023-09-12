"use client";

import Link from "next/link";
import "./navbar.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import BurgerMenu from "../../../public/data/pictures/icons8-menu-64.png";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    // NAVBAR
    <nav>
      <Image
        className="btn"
        src={BurgerMenu}
        alt="Icône d'un burger menu"
        onClick={toggleNav}
      ></Image>
      {(toggleMenu || screenWidth > 900) && (
        <ul className="list">
          <li className="li__items">
            <Link className="items" href="/">
              Accueil
            </Link>
          </li>
          <li className="li__items">
            <Link className="items" href="/massages">
              Massages
            </Link>
          </li>
          <li className="li__items">
            <Link className="items" href="/degree">
              Diplômes
            </Link>
          </li>
          <li className="li__items">
            <Link className="items" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
