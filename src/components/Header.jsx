import React from 'react';
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const onChangeLanguage = (e) => {
    const lang = e.target.value.toLowerCase();
    i18n.changeLanguage(lang);
  };

  return (
    <header className="header">
      <a className="header__logo" href="/" />
      <ul className="header__menu">
        <li className="header__menu-item">{t('title')}</li>
        <li className="header__menu-item">{t('faq')}</li>
        <li className="header__menu-item">{t('about us')}</li>
      </ul>
      <select onChange={e => onChangeLanguage(e)}>
        <option defaultValue>EN</option>
        <option>TR</option>
        <option>RU</option>
      </select>
    </header>
  );
}

export default Header;