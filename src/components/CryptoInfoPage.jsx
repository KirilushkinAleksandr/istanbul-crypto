import React from "react";
import { useTranslation } from "react-i18next";

function CryptoInfoPage() {
  const { t } = useTranslation();

  return (
    <section className="content__section">
      <div>{t()}</div>
    </section>
  );
}

export default CryptoInfoPage;
