import React from "react";
import { useTranslation } from "react-i18next";

function Address() {
  const { t } = useTranslation();

  return (
    <section className="content__section content__section-margin-bottom content__section_address">
      <div className="content__title">{t("address")}</div>
      <div className="content__text text__center">
        {t("home-page.contacts")}
      </div>
      <div className="content__block text__center content-transform flex flex-between">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288.7418070791247!2d28.908683471198504!3d40.99452387575407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb3b0ba454cf%3A0x3f8b94263bab28b4!2sBJBi!5e0!3m2!1sru!2str!4v1674999925709!5m2!1sru!2str"
          width="400"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office map"
          className="map"
        />
      </div>
      <div className="text__center content__block_address">
        Gökalp Mah., Prof. Dr. Muammer Aksoy Cad. 39/B, 34020
        Zeytinburnu/İstanbul
      </div>
    </section>
  );
}

export default Address;
