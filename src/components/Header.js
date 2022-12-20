import React from 'react';
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <a className="header__logo" href="/" />
      <ul className="header__menu">
        <li className="header__menu-item">{t('title')}</li>
        <li className="header__menu-item">{t('faq')}</li>
        <li className="header__menu-item">{t('about us')}</li>
      </ul>
      <button type="button" className="header__button" onClick={() => changeLanguage('en')}>
        EN
      </button>
      <button type="button" className="header__button" onClick={() => changeLanguage('tr')}>
        TR
      </button>
      <button type="button" className="header__button" onClick={() => changeLanguage('ru')}>
        RU
      </button>
    </header>
  );
}

export default Header;