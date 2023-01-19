import React from "react";
import { Link } from "react-router-dom";
import MessengerButtons from "./MessengerButtons";
import logo from "../images/logo.svg";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";

function Footer() {
  return (
    <footer lang="en" className="footer">
      <div className="flex flex-between flex-align-center">
        <Link
          to="/"
          state={{ scrollTop: true }}
          className="header__logo"
        >
          <img src={logo} width={150} height={150} alt="BJBI logo" />
        </Link>
        <div>
          <img className="footer__icon" src={facebook} />
          <img src={instagram} />
        </div>
        <MessengerButtons />
      </div>
      <div className="footer__text flex flex-between">
        <p className="footer__item">&copy; BJBI Istanbul 2022 </p>
        <p className="footer__item">
          <a className="footer__item" href="mailto:info@bjbi.org ">
            info@bjbi.org 
          </a>
        </p>
        <p>
          <a className="footer__item" href="tel:05323615498">
            +90 532 361 54 98
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
