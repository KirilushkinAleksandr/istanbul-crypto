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
        <div className="content__title">main</div>
        
        <div className="content__text flex flex-between">
          <div className="content__text">USD</div>
          <div className="content__text">EUR</div>
          <Link to="exchange-currency">exchange currency</Link>
        </div>
      </section>
      <section className="content__section content__section_crypto">
        <div className="content__title">cryptos</div>
        <div className="content__text">
        Buy and sell cryptocurrencies with cash. Instantly, easily and safely.
Low commissions. High limits. Exchange offices.
In just a few steps, you can safely invest in crypto money and easily sell it whenever you want. 
        </div>
        <div className="content__text">
        You can find the contact and transportation information of our exchange offices located in Istanbul on this page.
        </div>
      </section>
      <section className="content__section flex flex-column flex-center">
        <div
          className="content__title content__title_clickable"
          onClick={() => switchShowFAQ()}
        >
          Frequently Asked Questions
        </div>
        <div className={`${showFAQclass}`} ref={faqRef}>
          <div className="content__text">q</div>
          <div className="content__text">a</div>
          <div className="content__text">q</div>
          <div className="content__text">a</div>
          <div className="content__text">q</div>
          <div className="content__text">a</div>
          <div className="content__text">q</div>
          <div className="content__text">a</div>
          <div className="content__text">q</div>
          <div className="content__text">a</div>
        </div>
      </section>
      <section className="content__section">
        <div className="content__title">about us</div>
        <div className="content__text">
          BJB Exchange has embraced the concept of trust and quality service
          since its establishment and put it at the center of its business. As
          BJB Exchange, we think that the most important component for our
          reputation in our sector is honesty. For a long time, we have had the
          professional expertise, in-depth market knowledge, technological
          infrastructure and commitment to provide you with an unmatched level
          of service that sets the standard in the foreign currency exchange
          industry. Over the years we have built a reputation for honesty,
          reliability and quality of service. Each customer is important to us
          and we try to establish a mutually beneficial relationship with each
          one of them. Our reward is when our customers do business with us
          again and recommend our services to others.
        </div>
        <div className="content__text">
          BJB Exchange has embraced the concept of trust and quality service
          since its establishment and put it at the center of its business. As
          BJB Exchange, we think that the most important component for our
          reputation in our sector is honesty. For a long time, we have had the
          professional expertise, in-depth market knowledge, technological
          infrastructure and commitment to provide you with an unmatched level
          of service that sets the standard in the foreign currency exchange
          industry. Over the years we have built a reputation for honesty,
          reliability and quality of service. Each customer is important to us
          and we try to establish a mutually beneficial relationship with each
          one of them. Our reward is when our customers do business with us
          again and recommend our services to others.
        </div>
      </section>
      <Address />
      <section className="content__section flex flex-center">
        <form
          className="content__text form flex flex-column flex-align-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="content__title">CONTACT US</div>
          <input
            className="content__text form__input"
            type="text"
            placeholder="Your name"
            required
            ref={nameRef}
          />
          <input
            className="content__text form__input"
            type="email"
            placeholder="Your email"
            required
            ref={emailRef}
          />
          <input
            className="content__text form__input"
            type="text"
            placeholder="Your question"
            required
            ref={msgRef}
          />
          <button className="form__btn form__btn_half-width">
            send message
          </button>
        </form>
      </section>
    </>
  );
}

export default MainPage;
