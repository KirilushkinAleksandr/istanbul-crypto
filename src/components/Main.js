import React from 'react';
import { useTranslation } from "react-i18next";
import { Link, Route, Routes } from "react-router-dom";

function Main() {
  const { t } = useTranslation();

  return (
    <main className="content">
      <Routes>
        <Route path="/" element={
          <section className="content__section">
            <>
              <div className="content__title">
                MAIN
              </div>
              <div className="content__text">
                <Link to="gold">GOLD</Link>
                <div className="content__text">
                </div>
                <Link to="crypto">CRYPTO</Link>
                <div className="content__text">
                </div>
                <Link to="coins">COINS</Link>
                <div className="content__text">
                </div>
                <Link to="contact-us">CONTACT US</Link>
              </div>
            </>

          </section>
        } />
        <Route path="/gold" element={
          <section className="content__section content__section_gold">
            <div className="content__title">
              {t('gold.title')}
            </div>
            <div className="content__text">
              {t('gold.text')}
            </div>
            <Link to="/">BACK</Link>
          </section>
        } />
        <Route path="/crypto" element={
          <section className="content__section content__section_crypto">

            <>
              <div className="content__title ">
                CRYPTO
              </div>
              <div className="content__text">
              </div>
              <Link to="/">BACK</Link>
              <div className="content__text">
              </div>
            </>
          </section>
        } />
        <Route path="/coins" element={
          <section className="content__section content__section_coins">

            <>
              <div className="content__title">
                COINS
              </div>
              <div className="content__text">
              </div>
              <Link to="/">BACK</Link>
              <div className="content__text">
              </div>
            </>
          </section>
        } />
        <Route path="/contact-us" element={
          <section className="content__section content__title_coins">
            <>
              <div className="content__title">
                CONTACT US
              </div>
              <div className="content__text">
              </div>
              <Link to="/">BACK</Link>
              <div className="content__text">
              </div>
            </>
          </section>
        } />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </main>
  );
}

export default Main;