import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();

  return (
    <main className="content">
      <section className="content__section">
        <div className="content__title">
          MAIN
        </div>
        <div className="content__text">
        </div>
      </section>
      <section className="content__section">
        <div className="content__title content__title_gold">
          {t('gold.title')}
        </div>
        <div className="content__text">
          {t('gold.text')}
        </div>
      </section>
      <section className="content__section">
        <div className="content__title content__title_crypto">
          CRYPTO
        </div>
        <div className="content__text">
        </div>
        <div className="content__text">
        </div>
      </section>
      <section className="content__section">
        <div className="content__title content__title_coins">
          COINS
        </div>
        <div className="content__text">
        </div>
        <div className="content__text">
        </div>
      </section>
      <section className="content__section">
        <div className="content__title content__title_coins">
          CONTACT US
        </div>
        <div className="content__text">
        </div>
        <div className="content__text">
        </div>
      </section>
    </main>
  );
}

export default Main;