import React from "react";
import { Link } from "react-router-dom";
import MessengerButtons from "./MessengerButtons";
import logo from "../images/logo.svg";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import whatsapp from "../images/whatsapp.svg";

function Footer() {
  return (
    <footer lang="en" className="footer">
      <div className="flex flex-between flex-align-center footer__text">
        <Link
          to="/"
          state={{ scrollTop: true }}
          className="header__logo"
        >
          <img src={logo} width={150} height={150} alt="BJBI logo" />
        </Link>
        <div className="flex">
          <img className="footer__icon" src={facebook} />
          <img className="footer__icon" src={instagram} />          
          <a
            href="https://wa.me/905335794451"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="footer__whatsapp">
              <img src={whatsapp}/>
            </div>
          </a>
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
        <p className="footer__item">
          <a href="tel:+905335794451">
            +90 533 579 44 51
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
