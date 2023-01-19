import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import rates from "../common/exchange-rates.json";
import arrows from "../images/arrows.svg";

function ExchangePage() {
  const [fromAmount, setFromAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toAmount, setToAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState("TRY");
  const [isResShown, setIsResShown] = useState(true);
  const pageRef = useRef(null);
  const inputRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => pageRef.current && pageRef.current.scrollIntoView());

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = inputRef.current.value;
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
        name: key,
        ...rates[key],
      });
    }
  }

  const res = `${fromAmount} ${fromCurrency} = ${toAmount} ${toCurrency}`;
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
                  min={1}
                  step={0.01}
                  defaultValue={1}
                  placeholder="amount"
                  required
                  onChange={() => setIsResShown(false)}
                />
              </div>
              <div className="flex flex-column form-exchange__field">
                <label className="form-exchange__select-label">
                    {t("exchange.from")}
                </label>
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
              <img src={arrows} className="form-exchange__arrows"/>
              <div className="flex flex-column form-exchange__field">
                <label className="form-exchange__select-label">{t("exchange.to")}</label>
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
            <div className="flex form__select-container">
              <div
                className={`form-exchange__result content__text content__block${
                  !isResShown ? " content__text_hidden" : ""
                } flex flex-column flex-align-center`}
              >
                {res || 'dsdfsdf'}
              </div>
              <div className="flex">
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
              <div className="table__item">{item.name}</div>
              <div className="table__item">{item.sell}</div>
              <div className="table__item">{item.buy}</div>
            </div>
          ))}
        </div>
    </section>
  );
}

export default ExchangePage;
