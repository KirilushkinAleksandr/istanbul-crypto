import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";

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

  useEffect(() => pageRef.current && pageRef.current.scrollIntoView());

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = Number(inputRef.current.value).toFixed(2);
    if (fromCurrency === "TRY") {
      setFromAmount(Number(amount).toFixed(2));
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

  const res = (
    <>
      <div className="flex">
        <span>{Number(fromAmount).toFixed(2)}</span>
        <img src={selectOptions[fromCurrency]} />
        <span>{fromCurrency}</span>
      </div>
      <span>=</span>
      <div className="flex">
        <span>{Number(toAmount).toFixed(2)}</span>
        <img src={selectOptions[toCurrency]} />
        <span>{toCurrency}</span>
      </div>
    </>
  );

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
                  min={1.00}
                  step={0.01}
                  defaultValue={1.00.toFixed(2)}
                  placeholder="amount"
                  required
                  onChange={() => setIsResShown(false)}
                />
              </div>
              <div className="flex flex-column form-exchange__field">
                <label className="form-exchange__select-label">
                    {t("exchange.from")}
                </label>
                <div className="flex">
                  <div><img src={selectOptions[fromCurrency]} className="form-exchange__select-img"/></div>
                  <select
                    className="form-exchange__select"
                    onChange={(e) => handleFromChange(e)}
                    value={fromCurrency}
                  >
                    <option value="USD" defaultValue>USD</option>
                    <option value="RUB">RUB</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                  </select>
                </div>
              </div>
              <img src={arrows} onClick={() => handleSwap()} className="form-exchange__arrows"/>
              <div className="flex flex-column form-exchange__field">
                <label className="form-exchange__select-label">{t("exchange.to")}</label>
                <div className="flex">
                  <div><img src={selectOptions[toCurrency]} className="form-exchange__select-img"/></div>
                  <select
                    className="form-exchange__select flex flex-align-center"
                    onChange={(e) => handleToChange(e)}
                    value={toCurrency}
                  >
                    <option value="USD">USD</option>
                    <option value="RUB">RUB</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY" defaultValue>TRY</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex form__select-container">
              <div
                className="flex flex-row form-exchange__result content__text content__block flex flex-column flex-align-center"
              >
                {isResShown && res}
              </div>
              <div className="flex flex-center">
                <Link to="/" state={{ scrollContactUs: true }}>
                  <div className="form-exchange__btn-light">
                    {t("contact-us.title")}
                  </div>
                </Link>
                <button className="form-exchange__btn">{t("exchange.get-rate")}</button>
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
                <img src={item.img} className="table__item-flag"></img>
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
