import React from "react";
import { useTranslation } from "react-i18next";

function Address() {
  const { t } = useTranslation();

  return (
    <section className="content__section">
      <div className="content__title">{t("address")}</div>
      <div className="content__text text__center">{t("home-page.contacts")}</div>
      <div className="content__block text__center content-transform flex flex-between">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1898.041372950487!2d28.985222573733537!3d41.036747930750224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7f3ccc31d1f%3A0x484dd8d1243c9867!2z0J_Qu9C-0YnQsNC00YwgItCi0LDQutGB0LjQvCI!5e0!3m2!1sru!2str!4v1672469403783!5m2!1sru!2str"
          width="400"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office map"
          className="map"
        />
      </div>
      <div className="text__center">
        Gümüşsuyu, Taksım Zafer Cd., 34435 Beyoğlu/İstanbul
      </div>
    </section>
  );
}

export default Address;
