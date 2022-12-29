import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Address from "./Address";
import ContactUs from "./ContactUs";

function MainPage() {
  const { t } = useTranslation();
  const faqRef = useRef(null);

  const showFAQclass = "content__text_hidden";
  const switchShowFAQ = () =>
    faqRef.current && faqRef.current.classList.toggle(showFAQclass);

  const cryptoComponents = []

  t("home-page.crypto").split(". ").forEach((data) => {
    cryptoComponents.push(<div className='crypto_item'>{data}</div>)
  });

  return (
    <>
      <section className="content__section content__section_coins flex flex-column flex-align-center">
        <div className="content__title">{t("home-page.currencies-title")}</div>
        <ul>
          <li className="content__item">{t("home-page.currencies.1")}</li>
          <li className="content__item">{t("home-page.currencies.2")}</li>
          <li className="content__item">{t("home-page.currencies.3")}</li>
          <li className="content__item">{t("home-page.currencies.4")}</li>
          <li className="content__item">{t("home-page.currencies.5")}</li>
          <li className="content__item">{t("home-page.currencies.6")}</li>
          <li className="content__item">{t("home-page.currencies.7")}</li>
        </ul>


        <div className="content__text flex flex-between">
          <div className="content__text">USD</div>
          <div className="content__text">EUR</div>
          <Link to="currency-rates">{t("home-page.currencies-link")}</Link>
        </div>
      </section>
      <section className="content__section content__section_crypto">
        <div className="content__title">{t("home-page.crypto-title")}</div>
        <div className="content__text flex flex-between flex-wrap flex-align-center flex-center">{cryptoComponents}</div>
      </section>
      <section className="content__section flex flex-column flex-center" id="faq">
        <div
          className="content__title content__title_clickable"
          onClick={() => switchShowFAQ()}
        >
          {t("faq.title")}
        </div>
        <div className={`${showFAQclass}`} ref={faqRef}>
          <div className="content__text">{t("faq.q-1")}</div>
          <div className="content__text">{t("faq.a-1")}</div>
          <div className="content__text">{t("faq.q-2")}</div>
          <div className="content__text">{t("faq.a-2")}</div>
          <div className="content__text">{t("faq.q-3")}</div>
          <div className="content__text">{t("faq.a-3")}</div>
          <div className="content__text">{t("faq.q-4")}</div>
          <div className="content__text">{t("faq.a-4")}</div>
          <div className="content__text">{t("faq.q-5")}</div>
          <div className="content__text">{t("faq.a-5")}</div>
        </div>
      </section>
      <section className="content__section" id="about-us">
        <div className="content__title">{t("about-us.title")}</div>
        <div className="content__text text__center" dangerouslySetInnerHTML={{__html: t("about-us.text")}}></div>
      </section>
      <Address />
      <ContactUs />
    </>
  );
}

export default MainPage;
