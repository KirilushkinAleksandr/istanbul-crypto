import React, { createRef, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Address from "./Address";
import ContactUs from "./ContactUs";
import Carousel from "./Carousel";
import Currency from "./Currency";

import payPorter from "../images/payporter.svg";

function MainPage() {
  const { t } = useTranslation();
  const faqBlockRef = useRef(null);
  const aboutRef = useRef(null);
  const contactUsRef = useRef(null);
  const pageTopRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  const faqs = [
    {question: 'faq.q-1', answer: 'faq.a-1'},
    {question: 'faq.q-2', answer: 'faq.a-2'},
    {question: 'faq.q-3', answer: 'faq.a-3'},
    {question: 'faq.q-4', answer: 'faq.a-4'},
    {question: 'faq.q-5', answer: 'faq.a-5'},
  ];
  const iconFAQref = useRef(faqs.map(() => createRef()));
  const iconOpenClass = "content_icon-open";
  const iconCloseClass = "content_icon-close";
  const showFAQref = useRef(faqs.map(() => createRef()));
  const showFAQclass = "content__text_hidden";
  const switchShowFAQ = (index) => {
    iconFAQref.current[index] &&
      iconFAQref.current[index].current.classList.toggle(iconCloseClass);
    showFAQref.current[index] &&
      showFAQref.current[index].current.classList.toggle(showFAQclass);
  }

  const cryptoComponents = [];

  t("home-page.crypto")
    .split(". ")
    .forEach((data, index) => {
      cryptoComponents.push(
        <div className="content__block_filled" key={index}>
          {data}
        </div>
      );
    });

  useEffect(() => {
    navigate(location.pathname, { replace: true });
  }, []);

  useEffect(() => {
    if (location.state && location.state.scrollFAQ) {
      scrollToTarget(faqBlockRef);
    }
    if (location.state && location.state.scrollAbout) {
      scrollToTarget(aboutRef);
    }
    if (location.state && location.state.scrollContactUs) {
      scrollToTarget(contactUsRef);
    }
    if (location.state && location.state.scrollTop) {
      scrollToTarget(pageTopRef);
    }
    navigate(location.pathname, { replace: true });
  }, [location.state]);

  const scrollToTarget = (ref) => {
    setTimeout(() => {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  };

  return (
    <>
      <section
        className="content__section content__section_crypto content__section_anchored flex flex-column flex-align-center"
        ref={pageTopRef}
      >
        <div className="content__title crypto__title">
          {t("home-page.crypto-title")}
        </div>
        <div className="content__text crypto__text flex flex-between flex-wrap flex-align-center flex-center">
          {cryptoComponents}
        </div>
        <Link to="crypto-info" className="content__block form__btn currency__btn flex flex-center flex-align-center">
          {t("crypto.btn")}
        </Link>
      </section>
      <section className="content__section">
        <img src={payPorter} className="content__text_full-width" alt="" />
      </section>
      <Currency />
      <section
        className="content__section content__section_anchored flex flex-between"
        id="faq"
        ref={faqBlockRef}
      >
        <div>
          <div className="content__title content__title_left-align">{t("faq.title")}</div>
          <Link to="/" className="form__btn currency__btn flex flex-center flex-align-center" state={{ scrollContactUs: true }}>
            {t("contact-us.title")}
          </Link>
        </div>
        <div>
          {faqs.map((item, index) => (
            <div key={index} className="content__block_question">
              <div
                ref={iconFAQref.current[index]}
                className={`content__block flex flex-between content_clickable content_open ${iconOpenClass} ${iconCloseClass}`}
                onClick={() => switchShowFAQ(index)}
              >
                {index + 1}. {t(item.question)}
              </div>
              <div
                ref={showFAQref.current[index]}
                className={`content__block content__block_answer ${showFAQclass}`}
              >
                {t(item.answer)}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        className="content__section content__section_anchored"
        id="about-us"
        ref={aboutRef}
      >
        <div className="content__title">
          {t("about-us.title")}
        </div>
        <div
          className="content__text text__center"
          dangerouslySetInnerHTML={{ __html: t("about-us.text-1") }}
        ></div>
        <Carousel />
      </section>
      <Address />
      <ContactUs scrollRef={contactUsRef} />
    </>
  );
}

export default MainPage;
