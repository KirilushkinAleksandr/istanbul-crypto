import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactFlagsSelect from "react-flags-select";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";

function Header() {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState("US");

  useEffect(() => {
    i18n.changeLanguage(selected === "US" ? "en" : selected.toLowerCase());
  }, [selected]);

  return (
    <header className="header">
      <a className="header__logo" href="/">
        <img width={150} height={150} src={logo} alt="BJBI logo" />
      </a>
      <ul className="header__menu">
        <li className="header__menu-item">
          <a href="#">{t("home-page.title")}</a>
        </li>
        <li className="header__menu-item">
          <a href="#faq">{t("faq.title-short")}</a>
        </li>
        <li className="header__menu-item">
          <a href="#about-us">{t("about-us.title")}</a>
        </li>
        <li className="header__menu-item">
          <Link to="currency-rates">{t("home-page.converter")}</Link>
        </li>
      </ul>
      <ReactFlagsSelect
        className="header__lang"
        selected={selected}
        onSelect={(code) => setSelected(code)}
        countries={["US", "TR", "RU"]}
        customLabels={{ US: "EN", TR: "TR", RU: "RU" }}
      />
    </header>
  );
}

export default Header;
