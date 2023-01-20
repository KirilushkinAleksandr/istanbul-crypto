import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import flagEUsmall from "../images/flag-EU-small.png";
import flagUSAsmall from "../images/flag-USA-small.png";
import logoTCMB from "../images/logo-TCMB.png";
import flagRUS from "../images/flag-RUS.png";
import flagUSA from "../images/flag-USA.png";
import flagEU from "../images/flag-EU.png";
import flagUK from "../images/flag-UK.svg";
import rates from "../common/exchange-rates.json";
import dots from "../images/dots.png";

import cbRates from "../common/cb-rates.json";

const currencyFlags = {
  USD: flagUSA,
  EUR: flagEU,
  GBP: flagUK,
  RUB: flagRUS,
};

function Currency() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const customRates = [];
  const offRates = [];

  customRates.push({
    name: "USD",
    ...rates["USD"],
  });
  customRates.push({
    name: "EUR",
    ...rates["EUR"],
  });

  for (const key in cbRates) {
    if (key !== "TRY") {
      offRates.push({
        name: key,
        ...cbRates[key],
      });
    }
  }

  const PreView = () => (
    <div className="content__list">
     <ul>
        <li className="content__item content__item-large">{t("home-page.currencies.1")}</li>
        <li className="content__item content__item-medium">{t("home-page.currencies.2")}</li>
        <li className="content__item content__item-small">{t("home-page.currencies.3")}</li>
      </ul>
      <div className="flex flex-center" onClick={() => setIsOpen(true)}>
        <img src={dots} className="content__dropdown"/>
      </div>
    </div>
  );

  const List = () => (
    <ul onClick={() => setIsOpen(false)} className="content__list">
      <li className="content__item">{t("home-page.currencies.1")}</li>
      <li className="content__item">{t("home-page.currencies.2")}</li>
      <li className="content__item">{t("home-page.currencies.3")}</li>
      <li className="content__item">{t("home-page.currencies.4")}</li>
      <li className="content__item">{t("home-page.currencies.5")}</li>
      <li className="content__item">{t("home-page.currencies.6")}</li>
      <li className="content__item">{t("home-page.currencies.7")}</li>
    </ul>
  );

  return (
    <section className="content__section content__section_coins flex flex-column flex-align-center">
      <div className="content__title">{t("home-page.currencies-title")}</div>
      { isOpen ? <List /> : <PreView /> }
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
  );
}

export default Currency;