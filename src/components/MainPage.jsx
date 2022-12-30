import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Address from "./Address";
import ContactUs from "./ContactUs";
import rates from "../common/exchange-rates.json";
import cbRates from "../common/cb-rates.json";
import circleUSD from "../images/circle-US.png";
import circleEUR from "../images/circle-EU.png";
import flagRUS from "../images/flag-RUS.png";
import flagUSA from "../images/flag-USA.png";
import flagEU from "../images/flag-EU.png";
import flagUK from "../images/flag-UK.svg";
import logoTCMB from "../images/logo-TCMB.png";

function MainPage() {
  const { t } = useTranslation();
  const faqRef = useRef(null);

  const showFAQclass = "content__text_hidden";
  const switchShowFAQ = () =>
    faqRef.current && faqRef.current.classList.toggle(showFAQclass);

  const cryptoComponents = [];
  const offRates = [];
  const customRates = [];

  t("home-page.crypto")
    .split(". ")
    .forEach((data, index) => {
      cryptoComponents.push(
        <div className="content__block_bordered" key={index}>
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
  return (
    <>
      <section className="content__section content__section_coins-title content__title-section flex flex-center flex-align-center">
        <div>{t("home-page.currencies-title")}</div>
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
        <div className="content__text content__text_full-width flex flex-between">
          <div className="content__block_bordered content__block_third flex flex-align-center">
            <img src={circleUSD} className="content__img" alt="" />
            <div className="flex flex-column flex-align-center flex-grow-1">
              <div className="content__block">USD</div>
              <div className="flex content__text_full-width">
                <div className="content__block content__text">
                  {t("exchange.sell")}
                </div>
                <div className="content__block flex-grow-1 text__center">
                  {parseInt(customRates[0].sell)}
                </div>
              </div>
              <div className="flex content__text_full-width">
                <div className="content__block content__text">
                  {t("exchange.buy")}
                </div>
                <div className="content__block flex-grow-1 text__center">
                  {customRates[0].buy}
                </div>
              </div>
            </div>
          </div>
          <div className="content__block_bordered content__block_third flex  flex-align-center">
            <img src={circleEUR} className="content__img" alt="" />
            <div className="flex flex-column flex-align-center flex-grow-1">
              <div className="content__block">EUR</div>
              <div className="flex content__text_full-width">
                <div className="content__block content__text">
                  {t("exchange.sell")}
                </div>
                <div className="content__block flex-grow-1 text__center">
                  {customRates[1].sell}
                </div>
              </div>
              <div className="flex content__text_full-width">
                <div className="content__block content__text">
                  {t("exchange.buy")}
                </div>
                <div className="content__block flex-grow-1 text__center">
                  {customRates[1].buy}
                </div>
              </div>
            </div>
          </div>
          <div className="content__block_bordered content__block_third">
            <div className="flex">
              <div className="content__logo flex flex-center flex-grow-1">
                <img src={logoTCMB} width={30} />
              </div>
              <div className="content__text flex-grow-1">
                {t("exchange.sell")}
              </div>
              <div className="content__text flex-grow-1">
                {t("exchange.buy")}
              </div>
            </div>
            {offRates.map((item, index) => (
              <div className="flex content__block" key={index}>
                <div className="flex">
                  <img src={currencyFlags[item.name]} width={30} height={20} />
                </div>
                <div className="content__text">{item.name}</div>
                <div className="content__text">{item.sell}</div>
                <div className="content__text">{item.buy}</div>
              </div>
            ))}
          </div>
        </div>
        <Link to="currency-rates" className="content__block">
          {t("home-page.currencies-link")}
        </Link>
      </section>
      <section className="content__section content__section_crypto-title content__title-section flex flex-center flex-align-center">
        <div>{t("home-page.crypto-title")}</div>
      </section>
      <section className="content__section content__section_crypto">
        <div className="content__title">{t("home-page.crypto-title")}</div>
        <div className="content__text flex flex-between flex-wrap flex-align-center flex-center">
          {cryptoComponents}
        </div>
      </section>
      <section
        className="content__section flex flex-column flex-center"
        id="faq"
      >
        <div
          className="content__title content__title_clickable"
          onClick={() => switchShowFAQ()}
        >
          {t("faq.title")}
        </div>
        <div className={`${showFAQclass}`} ref={faqRef}>
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
      <section className="content__section" id="about-us">
        <div className="content__title">{t("about-us.title")}</div>
        <div
          className="content__text text__center"
          dangerouslySetInnerHTML={{ __html: t("about-us.text") }}
        ></div>
      </section>
      <Address />
      <ContactUs />
    </>
  );
}

export default MainPage;