import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import flagEUsmall from "../images/flag-EU-small.png";
import flagUSAsmall from "../images/flag-USA-small.png";
import flagGBP from "../images/flags-exchange/GBP.svg";
import flagRUR from "../images/flags-exchange/RUB.svg";
import flagSAR from "../images/flags-exchange/SAR.svg";
import flagUAH from "../images/flags-exchange/UAH.svg";

function MonitorsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const [customRates, setCustomRates] = useState([]);

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
        customRates.push({
          name: "GBP",
          src: flagGBP,
          ...res["GBP"],
        });
        customRates.push({
          name: "RUR",
          src: flagRUR,
          ...res["RUB"],
        });
        customRates.push({
          name: "SAR",
          src: flagSAR,
          ...res["SAR"],
        });
        customRates.push({
          name: "UAH",
          src: flagUAH,
          ...res["UAH"],
        });
        setCustomRates(customRates);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <section className="exchange content__section_anchored flex flex-column flex-align-center">
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
    </section>
  );
}

export default MonitorsPage;
