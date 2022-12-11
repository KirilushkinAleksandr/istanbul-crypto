import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();

  return (
    <main className="content">
      <section className="content__section">
        <div className="profile__avatar-container">
          {t('gold')}
        </div>
        <div className="profile__info">
          краткое описание услуги буквально в двух словах =)
        </div>
        <div className="profile__info">
          (купля-продажа, обмен и прочее)
        </div>
      </section>
    </main>
  );
}

export default Main;