import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
import ExchangePage from "./ExchangePage";
import CryptoInfoPage from "./CryptoInfoPage";
import MonitorsPage from "./MonitorsPage";

function App() {
  const Main = (
    <>
      <Header />
      <main className="content">
        <MainPage />
      </main>
      <Footer />
    </>
  );
  const Exchange = (
    <>
      <Header />
      <main className="content">
        <ExchangePage />
      </main>
      <Footer />
    </>
  );
  const Crypto = (
    <>
      <Header />
      <main className="content">
        <CryptoInfoPage />
      </main>
      <Footer />
    </>
  );
  return (
    <div className="page">
      <Routes>
        <Route path="/monitor" element={<MonitorsPage />} />
        <Route path="/" element={Main} />
        <Route path="/currency-rates" element={Exchange} />
        <Route path="/crypto-info" element={Crypto} />
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
    </div>
  );
}

export default App;
