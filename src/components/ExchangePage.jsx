import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import rates from "../common/exchange-rates.json";
import arrows from "../images/arrows.svg";
import flagRUS from "../images/flags-exchange/RUB.svg";
import flagUSA from "../images/flags-exchange/USD.svg";
import flagEU from "../images/flags-exchange/EUR.svg";
import flagTR from "../images/flag-TR.png";

function ExchangePage() {
  const [fromAmount, setFromAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toAmount, setToAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState("TRY");
  const [isResShown, setIsResShown] = useState(false);
  const pageRef = useRef(null);
  const inputRef = useRef(null);
  const { t } = useTranslation();
  const hideResClass = 'form-exchange__result_hidden';

  useEffect(() => pageRef.current && pageRef.current.scrollIntoView());

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = Number(inputRef.current.value).toFixed(2);
    if (fromCurrency === "TRY") {
      setFromAmount(amount);
      const sellRate = rates[toCurrency].sell || 0;
      setToAmount((amount / sellRate).toFixed(2));
      setIsResShown(true);
    } else if (toCurrency === "TRY") {
      setFromAmount(amount);
      const buyRate = rates[fromCurrency].buy || 0;
      setToAmount((amount * buyRate).toFixed(2));
      setIsResShown(true);
    }
  };

  const handleFromChange = (e) => {
    setIsResShown(false);
    if (e.target.value !== "TRY") {
      setToCurrency("TRY");
      setFromCurrency(e.target.value);
    }
  };

  const handleToChange = (e) => {
    setIsResShown(false);
    if (e.target.value !== "TRY") {
      setFromCurrency("TRY");
      setToCurrency(e.target.value);
    }
  };

  const customRates = [];
  for (const key in rates) {
    if (key !== "TRY") {
      customRates.push({
        img: require(`../images/flags-exchange/${key}.svg`),
        name: key,
        ...rates[key],
      });
    }
  }

  const selectOptions = {
    USD: flagUSA,
    RUB: flagRUS,
    EUR: flagEU,
    TRY: flagTR,
  };

  const handleSwap = () => {
    const item = fromCurrency;
    setIsResShown(false);
    setFromCurrency(toCurrency);
    setToCurrency(item);
  };

  return (
    <section
      ref={pageRef}
      className="exchange content__section_anchored flex flex-column flex-align-center"
    >
      <div className="content__text_full-width content-transform flex flex-around">
        <div className="content__text form-exchange flex flex-column flex-align-center">
          <form
            className="flex flex-column flex-align-center"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="form__select-container flex">
              <div className="flex flex-column form-exchange__field">
                <label className="form-exchange__select-label">
                  {t("exchange.amount")}
                </label>
                <input
                  className="form-exchange__input"
                  type="number"
                  ref={inputRef}
                  min={1.0}
                  required
                  onChange={() => setIsResShown(false)}
                />
              </div>
              <div className="flex flex-column form-exchange__field">
                <label className="form-exchange__select-label">
                  {t("exchange.from")}
                </label>
                <div className="flex">
                  <div
                    className="form-exchange__select-img"
                  >
                    <img
                      src={selectOptions[fromCurrency]}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                  <select
                    className="form-exchange__select"
                    onChange={(e) => handleFromChange(e)}
                    value={fromCurrency}
                  >
                    <option value="USD" defaultValue>
                      USD
                    </option>
                    <option value="RUB">RUB</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                  </select>
                </div>
              </div>
              <img
                src={arrows}
                onClick={() => handleSwap()}
                className="form-exchange__arrows"
                alt=""
              />
              <div className="flex flex-column form-exchange__field">
                <label className="form-exchange__select-label">
                  {t("exchange.to")}
                </label>
                <div className="flex">
                  <div
                    className="form-exchange__select-img"
                  >
                    <img
                      src={selectOptions[toCurrency]}

                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                  <select
                    className="form-exchange__select flex flex-align-center"
                    onChange={(e) => handleToChange(e)}
                    value={toCurrency}
                  >
                    <option value="USD">USD</option>
                    <option value="RUB">RUB</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY" defaultValue>
                      TRY
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex form__select-container">
              <div
                className={`form-exchange__result content__text content__block flex flex-column flex-align-center ${
                  !isResShown && hideResClass
                }`}
              >
                <div className="flex">
                  <span>{Number(fromAmount).toFixed(2)}</span>
                  <img src={selectOptions[fromCurrency]} alt="" />
                  <span>{fromCurrency}</span>
                </div>
                <span>=</span>
                <div className="flex">
                  <span>{Number(toAmount).toFixed(2)}</span>
                  <img src={selectOptions[toCurrency]} alt="" />
                  <span>{toCurrency}</span>
                </div>
              </div>
              <div className="flex flex-center">
                <div className="form-exchange__btn form-exchange__btn_light">
                  <Link to="/" state={{ scrollContactUs: true }}>
                    {t("contact-us.title")}
                  </Link>
                </div>
                <button className="form-exchange__btn">
                  {t("exchange.get-rate")}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="content__title">{t("exchange.rates")}</div>
      <div className="table content__text flex flex-column flex-align-center">
        <div className="content__text_full-width flex flex-between">
          <div className="table__item table__item-name"></div>
          <div className="table__item table__item-name">
            {t("exchange.currency")}
          </div>
          <div className="table__item table__item-name">
            {t("exchange.sell")}
          </div>
          <div className="table__item table__item-name">
            {t("exchange.buy")}
          </div>
        </div>
        {customRates.map((item, index) => (
          <div
            className="content__text_full-width flex flex-between"
            key={index}
          >
            <div className="table__item">
              <img src={item.img} className="table__item-flag" alt="" />
            </div>
            <div className="table__item">{item.name}</div>
            <div className="table__item">{Number(item.sell).toFixed(2)}</div>
            <div className="table__item">{Number(item.buy).toFixed(2)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExchangePage;
