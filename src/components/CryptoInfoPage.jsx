import React from "react";
import { useTranslation } from "react-i18next";

function CryptoInfoPage() {
  const { t } = useTranslation();

  return (
    <section className="content__section crypto__page">
      <div className="title">{t("stablecoin.title")}</div>
      <div>{t("stablecoin.text1")}</div>
      <div>{t("stablecoin.text2")}</div>
      <div>{t("stablecoin.text3")}</div>
      <div className="title cursive">{t("introduction.title")}</div>
      <div>{t("introduction.text")}</div>
      <div className="title cursive">{t("stablecoin-crypto.title")}</div>
      <div>{t("stablecoin-crypto.text1")}</div>
      <div>{t("stablecoin-crypto.text2")}</div>
      <div>{t("stablecoin-crypto.text3")}</div>
      <div className="title cursive">{t("how-works.title")}</div>
      <div>{t("how-works.text")}</div>
      <div className="subtitle cursive">{t("how-works.fiat-backed.title")}</div>
      <div>{t("how-works.fiat-backed.text1")}</div>
      <div>{t("how-works.fiat-backed.text2")}</div>
      <div className="subtitle cursive">{t("how-works.crypto-backed.title")}</div>
      <div>{t("how-works.crypto-backed.text1")}</div>
      <div>{t("how-works.crypto-backed.text2")}</div>
      <div>{t("how-works.crypto-backed.text3")}</div>
      <div>{t("how-works.crypto-backed.text4")}</div>
      <div className="subtitle cursive">{t("how-works.algorithmic.title")}</div>
      <div>{t("how-works.algorithmic.text1")}</div>
      <div>{t("how-works.algorithmic.text2")}</div>

      <div className="title cursive">{t("advantages-stablecoins.title")}</div>
      <div>{t("advantages-stablecoins.text1")}</div>
      <div>{t("advantages-stablecoins.text2")}</div>
      <div>{t("advantages-stablecoins.text3")}</div>
      <div>{t("advantages-stablecoins.text4")}</div>
      <div className="title cursive">{t("disadvantages-stablecoins.title")}</div>
      <div>{t("disadvantages-stablecoins.text1")}</div>
      <div>{t("disadvantages-stablecoins.text2")}</div>
      <div>{t("disadvantages-stablecoins.text3")}</div>
      <div>{t("disadvantages-stablecoins.text4")}</div>
      <div>{t("disadvantages-stablecoins.text5")}</div>
      <div className="title cursive">{t("stablecoin-use-cases.title")}</div>
      <div>{t("stablecoin-use-cases.text")}</div>
      <div className="subtitle cursive">{t("stablecoin-use-cases.busd.title")}</div>
      <div>{t("stablecoin-use-cases.busd.text")}</div>
      <div className="subtitle cursive">{t("stablecoin-use-cases.dai.title")}</div>
      <div>{t("stablecoin-use-cases.dai.text")}</div>

      <div className="title cursive">{t("stablecoins-regulated.title")}</div>
      <div>{t("stablecoins-regulated.text")}</div>
      <div className="title cursive">{t("closing-thoughts.title")}</div>
      <div>{t("closing-thoughts.text1")}</div>
      <div>{t("closing-thoughts.text2")}</div>
      <div>{t("closing-thoughts.text3")}</div>
      <div className="title">{t("history.title")}</div>
      <div>{t("history.text")}</div>
      <div className="title cursive">{t("early-days.title")}</div>
      <div>{t("early-days.text1")}</div>
      <div>{t("early-days.text2")}</div>
      <div className="title cursive">{t("reusable.title")}</div>
      <div>{t("reusable.text1")}</div>
      <div>{t("reusable.text2")}</div>
      <div>{t("reusable.text3")}</div>

      <div className="title cursive">{t("bitcoin-network.title")}</div>
      <div>{t("bitcoin-network.text1")}</div>
      <div>{t("bitcoin-network.text2")}</div>
      <div>{t("bitcoin-network.text3")}</div>
      <div className="title cursive">{t("ethereum.title")}</div>
      <div>{t("ethereum.text1")}</div>
      <div>{t("ethereum.text2")}</div>
      <div>{t("ethereum.text3")}</div>
      <div>{t("ethereum.text4")}</div>
      <div>{t("ethereum.text5")}</div>

      <div className="flex flex-end">{t("source")}</div>
    </section>
  );
}

export default CryptoInfoPage;
