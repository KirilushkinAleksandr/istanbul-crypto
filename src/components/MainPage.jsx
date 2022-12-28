import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Address from "./Address";

function MainPage() {
  const { t } = useTranslation();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const msgRef = useRef(null);
  const faqRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msgTemplate = `mailto:alex26-98@yandex.ru?subject=Name: "${nameRef
      .current.value || "none"}" e-mail: "${emailRef.current.value ||
      "none"}"&amp;body=${msgRef.current.value || "none"}`;
    const link = document.createElement("a");
    link.setAttribute("href", msgTemplate);
    link.click();
    link.remove();
  };

  const showFAQclass = "content__text_hidden";
  const switchShowFAQ = () =>
    faqRef.current && faqRef.current.classList.toggle(showFAQclass);

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
          <Link to="exchange-currency">exchange currency</Link>
        </div>
      </section>
      <section className="content__section content__section_crypto">
        <div className="content__title">{t("home-page.crypto-title")}</div>
        <div className="content__text">{t("home-page.crypto")}</div>
        <div className="content__text">{t("home-page.contacts")}</div>
      </section>
      <section className="content__section flex flex-column flex-center">
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
      <section className="content__section">
        <div className="content__title">{t("about-us.title")}</div>
        <div className="content__text text__center" dangerouslySetInnerHTML={{__html: t("about-us.text")}}></div>
      </section>
      <Address />
      <section className="content__section flex flex-center">
        <form
          className="content__text form flex flex-column flex-align-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="content__title content__title_dark">{t("contact-us.title")}</div>
          <input
            className="content__text form__input"
            type="text"
            placeholder={t("contact-us.name")}
            required
            ref={nameRef}
          />
          <input
            className="content__text form__input"
            type="email"
            placeholder={t("contact-us.mail")}
            required
            ref={emailRef}
          />
          <input
            className="content__text form__input"
            type="text"
            placeholder={t("contact-us.text")}
            required
            ref={msgRef}
          />
          <button className="form__btn form__btn_half-width">
            {t("contact-us.btn")}
          </button>
        </form>
      </section>
    </>
  );
}

export default MainPage;
