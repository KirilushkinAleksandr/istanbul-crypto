import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactFlagsSelect from "react-flags-select";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";

import logo from "../images/logo.svg";

function Header() {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState("US");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(selected === "US" ? "en" : selected.toLowerCase());
  }, [selected]);

  return (
    <header className="header">
      <Navbar />
      <Link
        to="/"
        className="header__logo"
        onClick={() => setIsMobile(!isMobile)}
      >
        <img src={logo} className="header__logo-img" alt="BJBI logo" />
      </Link>
      <div className="header__navigation content-transform">
        <ul className="header__menu">
          <li className="header__menu-item">
            <Link to="/" state={{ scrollTop: true }} className="header__logo">
              {t("home-page.title")}
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="/" state={{ scrollFAQ: true }}>
              {t("faq.title-short")}
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="/" state={{ scrollAbout: true }}>
              {t("about-us.title")}
            </Link>
          </li>
          <li className="header__menu-item">
            <Link to="currency-rates">{t("home-page.converter")}</Link>
          </li>
        </ul>
        <ReactFlagsSelect
          className="header__lang"
          selected={selected}
          onSelect={(code) => setSelected(code)}
          countries={["US", "TR", "RU", "UA", "SA"]}
          customLabels={{ US: "EN", TR: "TR", RU: "RU", UA: "UA", SA: "SA" }}
        />
      </div>
    </header>
  );
}

export default Header;
