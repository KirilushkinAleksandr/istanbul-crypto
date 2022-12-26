import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function MainPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="content__section">
        <>
          <div className="content__title">
            MAIN
          </div>
          <div className="content__text">
            <Link to="exchange-currency">EXCHANGE</Link>
            <div className="content__text">
            </div>
          </div>
        </>
      </section>
      <section className="content__text">
        <>
          <form className="content__text" method="POST" onSubmit={(e) => e.target.value}>
            <div className="content__title">
              CONTACT US
            </div>
            <div className="content__text">
            </div>
            <input className="content__text" type="text" placeholder="Your question"></input>
            <input className="content__text" type="email" placeholder="Your email"></input>
          </form>
        </>
      </section>
    </>
  );
}

export default MainPage;