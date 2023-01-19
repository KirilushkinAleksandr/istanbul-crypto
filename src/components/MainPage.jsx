import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate} from "react-router-dom";

import Address from "./Address";
import ContactUs from "./ContactUs";
import Carousel from "./Carousel";
import rates from "../common/exchange-rates.json";
import cbRates from "../common/cb-rates.json";
import payPorter from "../images/payporter.svg";
import flagEUsmall from "../images/flag-EU-small.png";
import flagUSAsmall from "../images/flag-USA-small.png";
import flagRUS from "../images/flag-RUS.png";
import flagUSA from "../images/flag-USA.png";
import flagEU from "../images/flag-EU.png";
import flagUK from "../images/flag-UK.svg";
import logoTCMB from "../images/logo-TCMB.png";

function MainPage() {
  const { t } = useTranslation();
  const showFaqRef = useRef(null);
  const faqRef = useRef(null);
  const aboutRef = useRef(null);
  const contactUsRef = useRef(null);
  const pageTopRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const showFAQclass = "content__text_hidden";
  const switchShowFAQ = () =>
    showFaqRef.current && showFaqRef.current.classList.toggle(showFAQclass);

  const cryptoComponents = [];
  const offRates = [];
  const customRates = [];

  t("home-page.crypto")
    .split(". ")
    .forEach((data, index) => {
      cryptoComponents.push(
        <div className="content__block_filled" key={index}>
          {data}
        </div>
      );
    });

  for (const key in cbRates) {
    if (key !== "TRY") {
      offRates.push({
        name: key,
        ...cbRates[key],
      });
    }
  }
  customRates.push({
    name: "USD",
    ...rates["USD"],
  });
  customRates.push({
    name: "EUR",
    ...rates["EUR"],
  });
  const currencyFlags = {
    USD: flagUSA,
    EUR: flagEU,
    GBP: flagUK,
    RUB: flagRUS,
  }

  useEffect(() => {
    navigate(location.pathname, { replace: true });
  }, []);

  useEffect(() => {
    if (location.state && location.state.scrollFAQ) {
      scrollToTarget(faqRef);
    }
    if (location.state && location.state.scrollAbout) {
      scrollToTarget(aboutRef);
    }
    if (location.state && location.state.scrollContactUs) {
      scrollToTarget(contactUsRef);
    }
    if (location.state && location.state.scrollTop) {
      scrollToTarget(pageTopRef);
    }
    navigate(location.pathname, { replace: true });
  }, [location.state]);

  const scrollToTarget = (ref) => {
    setTimeout(() => {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  };

  return (
    <>
      <section className="content__section content__section_crypto content__section_anchored flex flex-column flex-align-center" ref={pageTopRef}>
        <div className="content__title crypto__title">{t("home-page.crypto-title")}</div>
        <div className="content__text crypto__text flex flex-between flex-wrap flex-align-center flex-center">
          {cryptoComponents}
        </div>
        <button className="crypto_btn form__btn form__btn_half-width">
            {t("crypto.btn")}
          </button>
      </section>
      <section className="content__section">
        <img src={payPorter} className="content__text_full-width" alt="" />
      </section>
      <section className="content__section content__section_coins flex flex-column flex-align-center">
        <div className="content__title">{t("home-page.currencies-title")}</div>
        <ul>
          <li className="content__item">{t("home-page.currencies.1")}</li>
          <li className="content__item">{t("home-page.currencies.2")}</li>
          <li className="content__item">{t("home-page.currencies.3")}</li>
          <li className="content__item">{t("home-page.currencies.4")}</li>
          <li className="content__item">{t("home-page.currencies.5")}</li>
          <li className="content__item">{t("home-page.currencies.6")}</li>
          <li className="content__item">{t("home-page.currencies.7")}</li>
        </ul>
        <div className="content__text content-transform content__text_full-width flex flex-between">
          <div className="content__block_bordered">
            <div className="content__block_header">
              <div className="content__block_title">USD</div>
              <img src={flagUSAsmall} className="content__icon" alt="" />
            </div>
            <div className="flex flex-column flex-align-center flex-grow-1">
              <div className="flex content__text_full-width content__block_line flex-between">
                <div className="content__text">
                  {t("exchange.sell")}
                </div>
                <div>
                  {parseInt(customRates[0].sell)}
                </div>
              </div>
              <div className="flex content__text_full-width content__block_line flex-between">
                <div className="content__text">
                  {t("exchange.buy")}
                </div>
                <div>
                  {customRates[0].buy}
                </div>
              </div>
            </div>
          </div>
          <div className="content__block_bordered">
            <div className="content__block_header">
              <div className="content__block_title">EUR</div>
              <img src={flagEUsmall} className="content__icon" alt="" />
            </div>
            <div className="flex flex-column flex-align-center flex-grow-1">
              <div className="flex content__text_full-width content__block_line flex-between">
                <div className="content__text">
                  {t("exchange.sell")}
                </div>
                <div>
                  {customRates[1].sell}
                </div>
              </div>
              <div className="flex content__text_full-width content__block_line flex-between">
                <div className="content__text">
                  {t("exchange.buy")}
                </div>
                <div>
                  {customRates[1].buy}
                </div>
              </div>
            </div>
          </div>
          <div className="content__block_bordered content__block_third">
            <div className="flex">
              <div className="content__logo flex flex-center flex-grow-1">
                <img src={logoTCMB} width={152} alt="" />
              </div>
              <div className="content__text flex-grow-1">
                {t("exchange.sell")}
              </div>
              <div className="content__text flex-grow-1">
                {t("exchange.buy")}
              </div>
            </div>
            {offRates.map((item, index) => (
              <div className="flex content__block content__block_line" key={index}>
                <div className="flex">
                  <img
                    src={currencyFlags[item.name]}
                    width={30}
                    height={20}
                    alt=""
                  />
                  <div className="content__text content__text_grow">
                    {item.name}
                  </div>
                </div>
                <div className="content__text content__text_grow">
                  {item.sell}
                </div>
                <div className="content__text content__text_grow">
                  {item.buy}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link to="currency-rates" className="content__block form__btn currency__btn flex flex-center flex-align-center">
          {t("home-page.currencies-link")}
        </Link>
      </section>
      <section
        className="content__section content__section_anchored flex flex-column flex-center"
        id="faq"
        ref={faqRef}
      >
        <div
          className="content__title content__title_clickable"
          onClick={() => switchShowFAQ()}
        >
          {t("faq.title")}
        </div>
        <Link to="/" state={{ scrollContactUs: true }}>
          {t("contact-us.title")}
        </Link>
        <div className={`${showFAQclass}`} ref={showFaqRef}>
          <div className="content__block content__text_l">
            1. {t("faq.q-1")}
          </div>
          <div className="content__block content__text">{t("faq.a-1")}</div>
          <div className="content__block content__text_l">
            2. {t("faq.q-2")}
          </div>
          <div className="content__block content__text">{t("faq.a-2")}</div>
          <div className="content__block content__text_l">
            3. {t("faq.q-3")}
          </div>
          <div className="content__block content__text">{t("faq.a-3")}</div>
          <div className="content__block content__text_l">
            4. {t("faq.q-4")}
          </div>
          <div className="content__block content__text">{t("faq.a-4")}</div>
          <div className="content__block content__text_l">
            5. {t("faq.q-5")}
          </div>
          <div className="content__block content__text">{t("faq.a-5")}</div>
        </div>
      </section>
      <section
        className="content__section content__section_anchored"
        id="about-us"
        ref={aboutRef}
      >
        <div className="content__title content__title-section">{t("about-us.title")}</div>
        <div
          className="content__text text__center"
          dangerouslySetInnerHTML={{ __html: t("about-us.text-1") }}
        ></div>
        <Carousel />
      </section>
      <Address />
      <ContactUs scrollRef={contactUsRef} />
    </>
  );
}

export default MainPage;
