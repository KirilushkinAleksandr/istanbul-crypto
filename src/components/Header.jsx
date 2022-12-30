import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactFlagsSelect from "react-flags-select";
import { Link } from "react-router-dom";

import logo from "../images/logo-new.jpg";

function Header() {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState("US");

  useEffect(() => {
    i18n.changeLanguage(selected === "US" ? "en" : selected.toLowerCase());
  }, [selected]);

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logo} width={150} height={150} alt="BJBI logo" />
      </Link>
      <ul className="header__menu">
        <li className="header__menu-item">
          <Link to="/" className="header__logo">
            {t("home-page.title")}
          </Link>
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
