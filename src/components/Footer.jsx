import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import instagram from "../images/instagram.svg";
import whatsapp from "../images/whatsapp.svg";
import telegram from "../images/telegram.svg";

function Footer() {
  return (
    <footer lang="en" className="footer">
      <div className="flex flex-between flex-align-center footer__text footer__text_sm">
        <Link to="/" state={{ scrollTop: true }} className="header__logo">
          <img src={logo} width={150} height={150} alt="BJBi logo" />
        </Link>
        <div className="flex flex-align-center">
          <a
            href="https://t.me/bjbi_org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={telegram} className="footer__icon footer__icon_sm" alt="" width={40} />
          </a>
          <a
            href="https://instagram.com/bjbi_org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} className="footer__icon" alt="" />
          </a>
          <a
            href="https://wa.me/905335794451"
            target="_blank"
            rel="noopener noreferrer"
          >

              <img src={whatsapp} className="footer__icon" alt="" />
          </a>
        </div>
        {/* empty div is required for proper links positioning  */}
        <div></div>
      </div>
      <div className="footer__text flex flex-between">
        <p className="footer__item">&copy; BJBi Istanbul 2023 </p>
        <p className="footer__item">
          <a className="footer__item" href="mailto:info@bjbi.org">
            info@bjbi.org
          </a>
        </p>
        <p className="footer__item">
          <a href="tel:+905335794451">+90 533 579 44 51</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
