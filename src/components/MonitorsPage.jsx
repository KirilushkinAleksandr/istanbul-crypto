import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import flagEUsmall from "../images/flag-EU-small.png";
import flagUSAsmall from "../images/flag-USA-small.png";
import flagGBP from "../images/flags-exchange/GBP.svg";
import flagRUR from "../images/flags-exchange/RUB.svg";
import flagSAR from "../images/flags-exchange/SAR.svg";
import flagUAH from "../images/flags-exchange/UAH.svg";
import logo from "../images/logo.svg";

function MonitorsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const [customRatesFirstLine, setFirstLineRates] = useState([]);
  const [customRatesSecondLine, setSecondLineRates] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("./exchange-rates.json")
      .then((res) => res.json())
      .then((res) => {
        const customRatesFirst = [];
        customRatesFirst.push({
          name: "USD",
          src: flagUSAsmall,
          ...res["USD"],
        });
        customRatesFirst.push({
          name: "EUR",
          src: flagEUsmall,
          ...res["EUR"],
        });
        customRatesFirst.push({
          name: "GBP",
          src: flagGBP,
          ...res["GBP"],
        });
        setFirstLineRates(customRatesFirst);
        const customRatesSecond = [];
        customRatesSecond.push({
          name: "RUR",
          src: flagRUR,
          ...res["RUB"],
        });
        customRatesSecond.push({
          name: "UAH",
          src: flagUAH,
          ...res["UAH"],
        });
        customRatesSecond.push({
          name: "SAR",
          src: flagSAR,
          ...res["SAR"],
        });
        setSecondLineRates(customRatesSecond);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <>
      <div className="flex flex-center .content__text_full-width">
        <img
          src={logo}
          className="header__logo-img header__logo-img_xl"
          alt="BJBi logo"
        />
      </div>
      <section className="content__section_fixed flex flex-wrap flex-around">
        {isLoading ? (
          <div>loading</div>
        ) : (
          customRatesFirstLine.map((item, index) => (
            <div
              className="content__block_bordered content__block_flex"
              key={index}
            >
              <div className="content__block_header flex flex-between">
                <div className="content__block_title_xl">{item.name}</div>
                <img src={item.src} className=" content__icon_l" alt="" />
              </div>

              <div className="flex flex-column flex-align-center flex-grow-1">
                <div className="flex content__text_full-width content__block_line flex-between">
                  <div className="content__text content__block_title_l">
                    {t("exchange.sell")}
                  </div>
                  <div className="content__text content__block_title_l">
                    {Number(item.sell).toFixed(2)}
                  </div>
                </div>
                <div className="flex content__text_full-width content__block_line flex-between">
                  <div className="content__text content__block_title_l">
                    {t("exchange.buy")}
                  </div>

                  <div className="content__text content__block_title_l">
                    {Number(item.buy).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
      <section className="content__section_fixed flex flex-wrap flex-around">
        {isLoading ? (
          <div>loading</div>
        ) : (
          customRatesSecondLine.map((item, index) => (
            <div
              className="content__block_bordered content__block_flex"
              key={index}
            >
              <div className="content__block_header flex flex-between">
                <div className="content__block_title_xl">{item.name}</div>
                <img
                  src={item.src}
                  className="content__icon content__icon_l"
                  alt=""
                />
              </div>

              <div className="flex flex-column flex-align-center flex-grow-1">
                <div className="flex content__text_full-width content__block_line flex-between">
                  <div className="content__text content__block_title_l">
                    {t("exchange.sell")}
                  </div>
                  <div className="content__text content__block_title_l">
                    {Number(item.sell).toFixed(2)}
                  </div>
                </div>
                <div className="flex content__text_full-width content__block_line flex-between">
                  <div className="content__text content__block_title_l">
                    {t("exchange.buy")}
                  </div>

                  <div className="content__text content__block_title_l">
                    {Number(item.buy).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
}

export default MonitorsPage;
