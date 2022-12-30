import React from "react";
import { useTranslation } from "react-i18next";

import aero from "../images/aero-1.jpg";

function Address() {
  const { t } = useTranslation();

  return (
    <section className="content__section">
      <div className="content__title">{t("address")}</div>
      <div className="content__text">{t("home-page.contacts")}</div>
      <div className="content__block flex flex-between">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1424.1145734511535!2d28.967837427400756!3d41.01147926581093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9a4f3a3b3f7%3A0xb967e535944a711f!2sBTL%20Coin%20-%20Crypto%20Exchange!5e0!3m2!1sru!2str!4v1671741274361!5m2!1sru!2str"
          width="400"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office map"
        />
        <div className="form__btn_half-width flex flex-column flex-evenly flex-align-center">
          <div className=" text__center">
            Molla Fenari Mahallesi, Çuhacı Han Sokak, No:24 Kapalı Çarşı, 34120
            Fatih/İstanbul
          </div>
          <img src={aero} className="content__block content__full-img" />
        </div>
      </div>
    </section>
  );
}

export default Address;
