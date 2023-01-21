import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { t } = useTranslation();
    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div className="burger">
            <nav>
                <div className={`burger-menu ${isMenuClicked && "clicked"}`} onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>
              <ul className="burger__menu">
                <li className="burger__menu-item">
                  <Link to="/" state={{ scrollTop: true }} className="header__logo">
                    {t("home-page.title")}
                  </Link>
                </li>
                <li className="burger__menu-item">
                  <Link to="/" state={{ scrollFAQ: true }}>
                    {t("faq.title-short")}
                  </Link>
                </li>
                <li className="burger__menu-item">
                  <Link to="/" state={{ scrollAbout: true }}>
                    {t("about-us.title")}
                  </Link>
                </li>
                <li className="burger__menu-item">
                  <Link to="currency-rates">{t("home-page.converter")}</Link>
                </li>
              </ul>
            </div>
        </div>
    )
}

export default Navbar;
