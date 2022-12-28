import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
import ExchangePage from "./ExchangePage";
import MessengerButtons from "./MessengerButtons";

function App() {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <MessengerButtons />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/currency-rates" element={<ExchangePage />} />
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
