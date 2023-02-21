import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
import ExchangePage from "./ExchangePage";
import CryptoInfoPage from "./CryptoInfoPage";
import MonitorsPage from "./MonitorsPage";

function App() {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/currency-rates" element={<ExchangePage />} />
          <Route path="/crypto-info" element={<CryptoInfoPage />} />
          <Route path="/monitor" element={<MonitorsPage />} />
          <Route
            path="*"
            element={
              <section className="content__section flex flex-column flex-center">
                <div>404</div>
                <div>Page not found</div>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
