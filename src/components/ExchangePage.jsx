import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import rates from "../common/exchange-rates.json";

function ExchangePage() {
  const [fromAmount, setFromAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toAmount, setToAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState("TRY");
  const [isResShown, setIsResShown] = useState(false);
  const inputRef = useRef(null);
  const { t } = useTranslation();

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
    <section className="content__section content__section_coins flex flex-column flex-align-center">
      <div className="content__title">{t("exchange.rates")}</div>
      <div className="content__text_full-width content-transform flex flex-around">
        <div className="table content__text flex flex-column flex-align-center">
          <div className="content__text_full-width flex flex-between">
            <div className="table__item table__item-name">{t("exchange.currency")}</div>
            <div className="table__item table__item-name">{t("exchange.sell")}</div>
            <div className="table__item table__item-name">{t("exchange.buy")}</div>
          </div>
          {customRates.map((item, index) => (
            <div className="content__text_full-width flex flex-between" key={index}>
              <div className="table__item">{item.name}</div>
              <div className="table__item">{item.sell}</div>
              <div className="table__item">{item.buy}</div>
            </div>
          ))}
        </div>
        <div className="content__text form flex flex-column flex-align-center">
          <form
            className="form__content flex flex-column flex-align-center"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="form__select-container flex">
              <div className="form__select-group flex flex-column">
                <label className="form__select-label">{t("exchange.from")}</label>
                <select
                  className="form__select"
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
              <div className="form__select-group flex flex-column">
                <label className="form__select-label">{t("exchange.to")}</label>
                <select
                  className="form__select flex flex-align-center"
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
            <input
              className="form__input"
              type="number"
              ref={inputRef}
              min={1}
              step={0.01}
              defaultValue={1}
              placeholder="amount"
              required
              onChange={() => setIsResShown(false)}
            />
            <button className="form__btn">{t("exchange.get-rate")}</button>
          </form>
          <div
            className={`content__text content__block${!isResShown ?
              " content__text_hidden" : ""} flex flex-column flex-align-center`}
          >
            {res}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExchangePage;
