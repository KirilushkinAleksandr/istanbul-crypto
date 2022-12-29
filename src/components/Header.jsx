import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import ReactFlagsSelect from "react-flags-select";

function Header() {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState("US");

  useEffect(() => {
    i18n.changeLanguage(selected === "US" ? "en" : selected.toLowerCase());
  }, [selected])

  return (
    <header className="header">
      <a className="header__logo" href="/" />
      <ul className="header__menu">
        <li className="header__menu-item">{t('title')}</li>
        <li className="header__menu-item">{t('faq.title-short')}</li>
        <li className="header__menu-item">{t('about-us.title')}</li>
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
