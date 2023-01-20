import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Address from "./Address";
import ContactUs from "./ContactUs";
import Carousel from "./Carousel";
import Currency from "./Currency";

import payPorter from "../images/payporter.svg";

function MainPage() {
  const { t } = useTranslation();
  const showFaqRef = useRef(null);
  const faqRef = useRef(null);
  const aboutRef = useRef(null);
  const contactUsRef = useRef(null);
  const pageTopRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const showFAQclass = "content__text_hidden";
  const switchShowFAQ = () =>
    showFaqRef.current && showFaqRef.current.classList.toggle(showFAQclass);

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
      scrollToTarget(faqRef);
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
      <section className="content__section content__section_crypto content__section_anchored flex flex-column flex-align-center" ref={pageTopRef}>
        <div className="content__title crypto__title">{t("home-page.crypto-title")}</div>
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
        className="content__section content__section_anchored flex flex-column flex-center"
        id="faq"
        ref={faqRef}
      >
        <div
          className="content__title content__title_clickable"
          onClick={() => switchShowFAQ()}
        >
          {t("faq.title")}
        </div>
        <Link to="/" state={{ scrollContactUs: true }}>
          {t("contact-us.title")}
        </Link>
        <div className={`${showFAQclass}`} ref={showFaqRef}>
          <div className="content__block content__text_l">
            1. {t("faq.q-1")}
          </div>
          <div className="content__block content__text">{t("faq.a-1")}</div>
          <div className="content__block content__text_l">
            2. {t("faq.q-2")}
          </div>
          <div className="content__block content__text">{t("faq.a-2")}</div>
          <div className="content__block content__text_l">
            3. {t("faq.q-3")}
          </div>
          <div className="content__block content__text">{t("faq.a-3")}</div>
          <div className="content__block content__text_l">
            4. {t("faq.q-4")}
          </div>
          <div className="content__block content__text">{t("faq.a-4")}</div>
          <div className="content__block content__text_l">
            5. {t("faq.q-5")}
          </div>
          <div className="content__block content__text">{t("faq.a-5")}</div>
        </div>
      </section>
      <section
        className="content__section content__section_anchored"
        id="about-us"
        ref={aboutRef}
      >
        <div className="content__title content__title-section">{t("about-us.title")}</div>
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
