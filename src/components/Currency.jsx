import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import flagEUsmall from "../images/flag-EU-small.png";
import flagUSAsmall from "../images/flag-USA-small.png";
import logoTCMB from "../images/logo-TCMB.png";
import flagRUS from "../images/flags-exchange/RUB.svg";
import flagUSA from "../images/flags-exchange/USD.svg";
import flagEU from "../images/flags-exchange/EUR.svg";
import flagUK from "../images/flags-exchange/GBP.svg";
import dots from "../images/dots.png";

import cbRates from "./cbr.json";

const currencyFlags = {
  USD: flagUSA,
  EUR: flagEU,
  GBP: flagUK,
  RUB: flagRUS,
};

function Currency() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  const [customRates, setCustomRates] = useState([]);
  const offRates = [];

  useEffect(() => {
    setIsLoading(true);

    fetch("/exchange-rates.json")
      .then((res) => res.json())
      .then((res) => {
        const customRates = [];
        customRates.push({
          name: "USD",
          src: flagUSAsmall,
          ...res["USD"],
        });
        customRates.push({
          name: "EUR",
          src: flagEUsmall,
          ...res["EUR"],
        });
        setCustomRates(customRates);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  for (const key in cbRates) {
    if (key !== "TRY") {
      offRates.push({
        name: key,
        sell: (parseInt(cbRates[key].sell * 100) / 100).toFixed(2),
        buy: (parseInt(cbRates[key].buy * 100) / 100).toFixed(2),
      });
    }
  }

  const PreView = () => (
    <div className="content__list">
      <ul>
        <li
          onClick={() => setIsOpen(true)}
          className="content__item content_clickable content__item-large"
        >
          {t("home-page.currencies.1")}
        </li>
        <li
          onClick={() => setIsOpen(true)}
          className="content__item content_clickable content__item-medium"
        >
          {t("home-page.currencies.2")}
        </li>
        <li
          onClick={() => setIsOpen(true)}
          className="content__item content_clickable content__item-small"
        >
          {t("home-page.currencies.3")}
        </li>
      </ul>
      <div className="flex flex-center">
        <img
          src={dots}
          alt=""
          onClick={() => setIsOpen(true)}
          className="content__dropdown content_clickable"
        />
      </div>
    </div>
  );

  const List = () => (
    <ul
      onClick={() => setIsOpen(false)}
      className="content__list content_clickable flex flex-column flex-align-center"
    >
      <li className="content__item content_clickable">
        {t("home-page.currencies.1")}
      </li>
      <li className="content__item content_clickable">
        {t("home-page.currencies.2")}
      </li>
      <li className="content__item content_clickable">
        {t("home-page.currencies.3")}
      </li>
      <li className="content__item content_clickable">
        {t("home-page.currencies.4")}
      </li>
      <li className="content__item content_clickable">
        {t("home-page.currencies.5")}
      </li>
      <li className="content__item content_clickable">
        {t("home-page.currencies.6")}
      </li>
      <li className="content__item content_clickable">
        {t("home-page.currencies.7")}
      </li>
    </ul>
  );

  return (
    <section className="content__section content__section_coins flex flex-column flex-align-center">
      <div className="content__title">{t("home-page.currencies-title")}</div>
      {isOpen ? <List /> : <PreView />}
      <div className="content__text currency-transform content-transform content__text_fix-width flex flex-between">
        {isLoading ? (
          <div>loading</div>
        ) : (
          customRates.map((item, index) => (
            <div className="content__block_bordered" key={index}>
              <div className="content__block_header flex flex-between">
                <div className="content__block_title">{item.name}</div>
                <img src={item.src} className="content__icon" alt="" />
              </div>

              <div className="flex flex-column flex-align-center flex-grow-1">
                <div className="flex content__text_full-width content__block_line flex-between">
                  <div className="content__text">{t("exchange.sell")}</div>
                  <div>{Number(item.sell).toFixed(2)}</div>
                </div>
                <div className="flex content__text_full-width content__block_line flex-between">
                  <div className="content__text">{t("exchange.buy")}</div>

                  <div>{Number(item.buy).toFixed(2)}</div>
                </div>
              </div>
            </div>
          ))
        )}
        <div className="content__block_bordered content__block_third">
          <div className="flex">
            <div className="content__logo flex-grow-1">
              <img src={logoTCMB} width={152} alt="" />
            </div>
            <div className="content__text flex-grow-1">
              {t("exchange.sell")}
            </div>
            <div className="content__text flex-grow-1">{t("exchange.buy")}</div>
          </div>
          {offRates.map((item, index) => (
            <div
              className="flex content__block content__block_line"
              key={index}
            >
              <div className="flex table__currency">
                <img src={currencyFlags[item.name]} alt="" />
                <div className="content__text">{item.name}</div>
              </div>
              <div className="content__text flex-grow-1">
                {item.sell.toString().length === 5
                  ? item.sell
                  : "0" + item.sell}
              </div>
              <div className="content__text flex-grow-1">
                {item.buy.toString().length === 5 ? item.buy : "0" + item.buy}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        to="currency-rates"
        className="content__block form__btn currency__btn flex flex-center flex-align-center"
      >
        {t("home-page.currencies-link")}
      </Link>
    </section>
  );
}

export default Currency;
