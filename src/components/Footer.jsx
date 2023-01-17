import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.svg";

function Footer() {
  return (
    <footer lang="en" className="footer flex-align-center">
      <Link
        to="/"
        state={{ scrollTop: true }}
        className="header__logo"
      >
        <img src={logo} width={150} height={150} alt="BJBI logo" />
      </Link>
      <p className="footer__item">&copy; BJBI Istanbul 2022 </p>
      <p>
        <a className="footer__item" href="tel:05323615498">
          05323615498
        </a>
      </p>
      <p className="footer__item">
        <a className="footer__item" href="mailto:bjbi@mail.ru">
          bjbi@mail.ru
        </a>
      </p>
    </footer>
  );
}

export default Footer;
