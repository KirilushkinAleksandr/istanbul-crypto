import React from "react";
import { useTranslation } from "react-i18next";

function Address() {
  const { t } = useTranslation();

  return (
    <section className="content__section">
      <div className="content__title">{t("address")}</div>
      <div className="content__text text__center">
        {t("home-page.contacts")}
      </div>
      <div className="content__block text__center content-transform flex flex-between">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d188.21273927701253!2d28.909044963804995!3d40.99453359844857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb9f8113cfe1%3A0x30befdffda5b1199!2s37.%20Sokak!5e0!3m2!1sru!2str!4v1674328305962!5m2!1sru!2str"
          width="400"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office map"
          className="map"
        />
      </div>
      <div className="text__center">
        Gökalp Mah., Prof. Dr. Muammer Aksoy Cad. 39/B, 34020
        Zeytinburnu/İstanbul
      </div>
    </section>
  );
}

export default Address;
