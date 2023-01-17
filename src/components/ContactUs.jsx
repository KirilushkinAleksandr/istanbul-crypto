import React, { useRef } from 'react';
import { useTranslation } from "react-i18next";

function ContactUs({scrollRef}) {
  const { t } = useTranslation();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const msgRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msgTemplate = `mailto:bjbi@mail.ru?subject=Name: "${nameRef
      .current.value || "none"}" e-mail: "${emailRef.current.value ||
      "none"}"&amp;body=${msgRef.current.value || "none"}`;
    const link = document.createElement("a");
    link.setAttribute("href", msgTemplate);
    link.click();
    link.remove();
  };

  return (
    <section className="content__section flex flex-center" ref={scrollRef}>
        <form
          className="content__text form flex flex-column flex-align-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="content__title">{t("contact-us.title")}</div>
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
  );
}

export default ContactUs;
