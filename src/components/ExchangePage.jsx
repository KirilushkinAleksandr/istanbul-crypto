import React, { useState } from "react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import rates from "../exchange-rates.json";

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
    console.log(rates)
    if (fromCurrency === "TRY") {
      setFromAmount(amount);
      setToAmount((amount / rates.buy[toCurrency]).toFixed(2));
      setIsResShown(true);
    } else if (toCurrency === "TRY") {
      setFromAmount(amount);
      setToAmount((amount * rates.sell[fromCurrency]).toFixed(2));
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
    console.log(e.target)
    if (e.target.value !== "TRY") {
      setFromCurrency("TRY");
      setToCurrency(e.target.value);
    }
  };

  const res = `${fromAmount} ${fromCurrency} = ${toAmount} ${toCurrency}`;
  return (
    <section className="content__section content__section_coins flex flex-column flex-center">
      <div className="content__title">currencies</div>
      <div>rates</div>
      <div className="content__text form flex flex-column flex-center">
        <form
          className="form__content flex flex-column flex-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="form__select-container flex">
            <div className="form__select-group flex flex-column">
              <label>from</label>
              <select
                className="form__select"
                onChange={(e) => handleFromChange(e)}
                value={fromCurrency}
              >
                <option value="USD" defaultValue>USD</option>
                <option value="RUB">RUB</option>
                <option value="EUR">EUR</option>
                <option value="TRY">TRY</option>
              </select>
            </div>
            <div className="form__select-group flex flex-column">
              <label>to</label>
              <select
                className="form__select flex flex-center"
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
          <input
            className="form__input"
            type="number"
            ref={inputRef}
            min={1}
            placeholder="amount"
            required
            onChange={() => setIsResShown(false)}
          />
          <button className="form__btn">get rate</button>
        </form>
        <div
          className={`content__text ${!isResShown &&
            "content__text_hidden"} flex flex-column flex-center`}
        >
          {res}
        </div>
      </div>
      <Link to="/" className="content__text flex flex-column flex-center">
        back
      </Link>
    </section>
  );
}

export default ExchangePage;
